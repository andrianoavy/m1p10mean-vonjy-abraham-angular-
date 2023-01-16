import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVoituresPageComponent } from './components/liste-voitures-page/liste-voitures-page.component';

const routes: Routes = [
  { path: 'voitures', component: ListeVoituresPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
