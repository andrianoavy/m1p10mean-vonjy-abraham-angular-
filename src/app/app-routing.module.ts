import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireVoiturePageComponent } from './components/formulaire-voiture-page/formulaire-voiture-page.component';
import { ListeVoituresPageComponent } from './components/liste-voitures-page/liste-voitures-page.component';

import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListeEntreeComponent } from './components/liste-entree/liste-entree.component';
import { ListeRepationComponent } from './components/liste-repation/liste-repation.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'voitures', component: ListeVoituresPageComponent , canActivate: [AuthGuard],data:{role:"Client"}},
  { path: 'hello', component: HelloworldComponent , canActivate: [AuthGuard]},
  { path: 'entrees', component:ListeEntreeComponent, canActivate: [AuthGuard] ,data:{role:"Atelier"}},
  { path: 'reparation', component:ListeRepationComponent, canActivate: [AuthGuard] ,data:{role:"Atelier"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
 }
