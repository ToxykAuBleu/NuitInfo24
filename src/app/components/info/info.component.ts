import { Component, OnInit } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { Article } from "../../interfaces/Article.interface";
import { FluxRSSService } from "../../services/fluxrss.service";
import { OCEAN_CLIMATE_PLATFORM_RSS } from "../../utils/constants";

@Component({
	selector: "app-info",
	imports: [CommonModule, NgFor],
	templateUrl: "./info.component.html",
	styleUrl: "./info.component.scss",
})
export class InfoComponent implements OnInit {
	constructor(private fluxRSSService: FluxRSSService) {}

	infos: Article[] = [];

	ngOnInit() {
		// Récupération des articles.
		this.fluxRSSService
			.getArticles(OCEAN_CLIMATE_PLATFORM_RSS)
			.subscribe((articles: Article[]) => {
				console.log(articles);
				this.infos = articles;
			});
	}
}
