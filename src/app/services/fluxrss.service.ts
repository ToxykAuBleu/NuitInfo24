import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "../interfaces/Article.interface";

@Injectable({
	providedIn: "root",
})
export class FluxRSSService {
	constructor() {}

	/** Récupère les articles du site en paramètre et renvoie une liste d'articles.
	 * @param source URL du flux RSS.
	 * @param start Index de départ.
	 * @param limit Nombre d'articles à récupérer.
	 * @returns Observable<Articles[]> Liste d'articles.
	 * @example FluxRSSService.getArticles(MER_GOVERNMENT_RSS, 0, 5).subscribe((articles) => {...});
	 * // Renvoie les 5 premiers articles du flux RSS du site du gouvernement.
	 */
	getArticles(source: string, start = 0, limit = 5) {
		return new Observable((subscriber) => {
			try {
				if (!source) {
					throw new Error("Source non défini.");
				}

				// Récupération des données RSS.
				fetch(source)
					.then((response) => {
						if (!response.ok) {
							throw new Error("La requête a échoué.");
						}
						return response.text();
					})
					.then((data) => {
						// Conversion de response en XMLDocument.
						const parser = new DOMParser();
						const xml = parser.parseFromString(
							data,
							"application/xml",
						);

						// Conversion de xml en Object.
						let result: Article[] = [];
						const articles = xml.getElementsByTagName("item");

						for (let i = start; i < limit; i++) {
							const article = articles[i];
							if (article) {
								result.push({
									title: article.getElementsByTagName(
										"title",
									)[0].textContent,
									link: article.getElementsByTagName(
										"link",
									)[0].textContent,
									date: article.getElementsByTagName(
										"pubDate",
									)[0].textContent,
								});
							}
						}
						subscriber.next(result);
						subscriber.complete();
					})
					.catch((error) => {
						subscriber.error(error);
					});
			} catch (error) {
				subscriber.error(error);
			}
		});
	}
}
