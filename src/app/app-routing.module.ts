import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireVoiturePageComponent } from './components/formulaire-voiture-page/formulaire-voiture-page.component';
import { ListeVoituresPageComponent } from './components/liste-voitures-page/liste-voitures-page.component';

import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListeEntreeComponent } from './components/liste-entree/liste-entree.component';
import { ListeRepationComponent } from './components/liste-repation/liste-repation.component';
import { PageDetailsVoitureComponent } from './components/page-details-voiture/page-details-voiture.component';
import { ReparationHistoriqueComponent } from './components/reparation-historique/reparation-historique.component';
import { PageFacturesComponent } from './components/page-factures/page-factures.component';
import { PageClientPaiementComponent } from "./components/page-client-paiement/page-client-paiement.component";
  
import { AuthGuard } from './guards/auth.guard';
import { DetailsFactureComponent } from './components/details-facture/details-facture.component';
import { PageFinancePaiementsComponent } from './components/page-finance-paiements/page-finance-paiements.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent}, 
  { path: 'entrees', component:ListeEntreeComponent, canActivate: [AuthGuard] ,data:{role:"Atelier"}},
  { path: 'reparation', component:ListeRepationComponent, canActivate: [AuthGuard] ,data:{role:"Atelier"}},
  { path: 'paiements', component:PageFinancePaiementsComponent, canActivate: [AuthGuard] ,data:{role:"Finance"}},
  { path: 'voitures', component: ListeVoituresPageComponent , canActivate: [AuthGuard],data:{role:"Client"}},
  { path: 'voitures/factures', component: PageFacturesComponent , canActivate: [AuthGuard],data:{role:"Client"}},
  { path: 'voitures/factures/:idFacture', component: DetailsFactureComponent , canActivate: [AuthGuard],data:{role:"Client"}},
  { path: 'voitures/factures/:idFacture/paiement', component: PageClientPaiementComponent , canActivate: [AuthGuard],data:{role:"Client"}},
  { path: 'voitures/:immatriculation', component: PageDetailsVoitureComponent , canActivate: [AuthGuard],data:{role:"Client"}},
  { path: 'voitures/:immatriculation/historique', component: ReparationHistoriqueComponent , canActivate: [AuthGuard],data:{role:"Client"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
 }
