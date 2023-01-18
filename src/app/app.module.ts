import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ListeVoituresPageComponent } from './components/liste-voitures-page/liste-voitures-page.component';
import { VoituresListeComponent } from './components/voitures-liste/voitures-liste.component';
import { VoituresListeItemComponent } from './components/voitures-liste-item/voitures-liste-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireVoiturePageComponent } from './components/formulaire-voiture-page/formulaire-voiture-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeVoituresPageComponent,
    VoituresListeComponent,
    VoituresListeItemComponent,
    FormulaireVoiturePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
