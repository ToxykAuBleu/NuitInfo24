import { Routes } from "@angular/router";
import { InfoComponent } from "./components/info/info.component";
import { JeuComponent } from "./components/jeu/jeu.component";

export const routes: Routes = [
    { path: 'info', component: InfoComponent},
    { path: 'jeu', component: JeuComponent}
];
