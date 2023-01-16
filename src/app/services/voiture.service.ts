import { Injectable } from '@angular/core';
import { Voiture } from '../models/Voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  getVoitures(): Voiture[] {
    return [
      {_id:"test", Marque:"Peugeot", Modele:"405",numImmatricul:"0405 TAC", idClient:"bema" },
      {_id:"test2", Marque:"Peugeot", Modele:"205",numImmatricul:"0420 TAC", idClient:"solo" },
    ];
  }

  constructor() { }
}
