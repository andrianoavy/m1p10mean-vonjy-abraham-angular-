import { Component,  OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from 'src/app/models/Voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voitures-liste',
  templateUrl: './voitures-liste.component.html',
  styleUrls: ['./voitures-liste.component.css']
})
export class VoituresListeComponent implements OnInit {

  voituresObs: Observable<any[]>;

  searchText:string = "";

  ngOnInit() {
    this.fetchVoitures()
  }

  fetchVoitures() {
    this.voituresObs = this.service.getVoitures();
  }
  filterVoitures(searchText:string) {
    this.voituresObs = this.service.findVoituresByString(searchText);
  }


  constructor(private service: VoitureService) {
  }

  send(event:string){
    if(event == "refresh")
      this.fetchVoitures()
  }

  applyFilter(event:KeyboardEvent){
    console.log(this.searchText)
  }

}
