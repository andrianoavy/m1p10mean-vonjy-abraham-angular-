import { Component, Input } from '@angular/core';
import { Voiture } from 'src/app/models/Voiture';

@Component({
  selector: 'app-voitures-liste-item',
  templateUrl: './voitures-liste-item.component.html',
  styleUrls: ['./voitures-liste-item.component.css']
})
export class VoituresListeItemComponent {
  @Input() voiture: Voiture | undefined;

  constructor() {  
  }
}
