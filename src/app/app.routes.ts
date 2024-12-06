import { Routes } from "@angular/router";
import { AProposComponent } from "./components/a-propos/a-propos.component";
import { InfoComponent } from "./components/info/info.component";

export const routes: Routes = [
    {path: 'a-propos', component: AProposComponent},
    { path: 'info', component: InfoComponent}
];
