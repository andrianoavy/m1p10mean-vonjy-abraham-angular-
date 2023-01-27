import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/authconfig.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator'

import { ListeVoituresPageComponent } from './components/liste-voitures-page/liste-voitures-page.component';
import { VoituresListeComponent } from './components/voitures-liste/voitures-liste.component';
import { VoituresListeItemComponent } from './components/voitures-liste-item/voitures-liste-item.component';
import { FormulaireVoiturePageComponent } from './components/formulaire-voiture-page/formulaire-voiture-page.component';

import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeVoitureComponent } from './components/liste-voiture/liste-voiture.component';
import { ListeEntreeComponent } from './components/liste-entree/liste-entree.component';
import { ListeRepationComponent } from './components/liste-repation/liste-repation.component';
import { RouterModule } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { PageDetailsVoitureComponent } from './components/page-details-voiture/page-details-voiture.component';
import { ReparationTrComponent } from './components/reparation-tr/reparation-tr.component';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr-MG';
import localeFrExtra from '@angular/common/locales/extra/fr-MG';
import { ReparationHistoriqueComponent } from './components/reparation-historique/reparation-historique.component';
import { ReparationTableComponent } from './components/reparation-table/reparation-table.component';
import { ListeEntreesHistoriqueComponent } from './components/liste-entrees-historique/liste-entrees-historique.component';
import { getFrenchPaginatorIntl } from './providers/mat-paginator-fr';
import { PageFacturesComponent } from './components/page-factures/page-factures.component';
import { StatistiqueFinanceComponent } from './components/statistique-finance/statistique-finance.component';
import { CalculBeneficeComponent } from './components/calcul-benefice/calcul-benefice.component';

registerLocaleData(localeFr,'fr-MG', localeFrExtra)

@NgModule({
  declarations: [
    AppComponent,
    ListeVoituresPageComponent,
    VoituresListeComponent,
    VoituresListeItemComponent,
    FormulaireVoiturePageComponent,
    LoginComponent,
    InscriptionComponent,
    ListeVoitureComponent,
    ListeEntreeComponent,
    ListeRepationComponent,
    PageDetailsVoitureComponent,
    ReparationTrComponent,
    ReparationHistoriqueComponent,
    ReparationTableComponent,
    ListeEntreesHistoriqueComponent,
    PageFacturesComponent,
    StatistiqueFinanceComponent,
    CalculBeneficeComponent,
  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]),
    DragDropModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'fr-MG' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
