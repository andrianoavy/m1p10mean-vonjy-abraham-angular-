import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/Voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voitures-liste',
  templateUrl: './voitures-liste.component.html',
  styleUrls: ['./voitures-liste.component.css']
})
export class VoituresListeComponent implements OnInit{
  
  voitures:Voiture[] = [];

  constructor(private service: VoitureService) {
  }

  ngOnInit(): void {
    this.service.getVoitures().subscribe(
      (res) => {
        // console.log(res);
        this.voitures = res;
      }
    )
  }
  isVoituresEmpty(){
    return this.voitures.length == 0;
  }


}
