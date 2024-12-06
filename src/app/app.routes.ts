import { Routes } from "@angular/router";
import { AProposComponent } from "./components/a-propos/a-propos.component";
import { InfoComponent } from "./components/info/info.component";
import { JeuComponent } from "./components/jeu/jeu.component";

export const routes: Routes = [
    { path: 'info', component: InfoComponent },
    { path: 'jeu', component: JeuComponent },
    { path: 'a-propos', component: AProposComponent },
];
