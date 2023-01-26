import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireVoiturePageComponent } from './components/formulaire-voiture-page/formulaire-voiture-page.component';
import { ListeVoituresPageComponent } from './components/liste-voitures-page/liste-voitures-page.component';

import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AuthGuard } from './guards/auth.guard';
import { ListeEntreeComponent } from './components/liste-entree/liste-entree.component';
import { ListeRepationComponent } from './components/liste-repation/liste-repation.component';
import { PageDetailsVoitureComponent } from './components/page-details-voiture/page-details-voiture.component';
import { ReparationHistoriqueComponent } from './components/reparation-historique/reparation-historique.component';
import { PageFacturesComponent } from './components/page-factures/page-factures.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'voitures', component: ListeVoituresPageComponent , canActivate: [AuthGuard]},
  { path: 'voitures/factures', component: PageFacturesComponent , canActivate: [AuthGuard]},
  { path: 'voitures/:immatriculation', component: PageDetailsVoitureComponent , canActivate: [AuthGuard]},
  { path: 'voitures/:immatriculation/historique', component: ReparationHistoriqueComponent , canActivate: [AuthGuard]},
  { path: 'entrees', component:ListeEntreeComponent, canActivate: [AuthGuard] },
  { path: 'reparation', component:ListeRepationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
 }
