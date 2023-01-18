import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireVoiturePageComponent } from './components/formulaire-voiture-page/formulaire-voiture-page.component';
import { ListeVoituresPageComponent } from './components/liste-voitures-page/liste-voitures-page.component';

const routes: Routes = [
  { path: 'voitures', component: ListeVoituresPageComponent },
  { path: 'voitures/new', component: FormulaireVoiturePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
