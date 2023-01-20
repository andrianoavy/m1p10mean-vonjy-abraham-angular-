import { Component } from '@angular/core';
import { throwError,Observable,catchError } from 'rxjs';
import { EntreeService } from 'src/app/services/entree.service';
import { VoitureService } from 'src/app/services/voiture.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-entree',
  templateUrl: './liste-entree.component.html',
  styleUrls: ['./liste-entree.component.css']
})
export class ListeEntreeComponent {

  entrees: any[];
  voitures:any[];

  entreeForm : FormGroup;

  constructor(private entree: EntreeService,private voitureServ: VoitureService,public formBuilder: FormBuilder,public router: Router) {
    this.entreeForm = this.formBuilder.group({
      designation : [''],
      dateEntree :[''],
      dateSortie :[''],
      voitureId :['']
    })
  }

  ngOnInit(){
    this.getAllEntrees();
    this.fetchVoitures();
  }

  getAllEntrees(){
    this.entreesObs = this.entree.findEntrees();
    this.entreesObs.subscribe(result => {
      this.entrees = result.data;
    })
  }

  fetchVoitures() {
    this.voituresObs = this.voitureServ.findVoitures();
    this.voituresObs.subscribe(result => {
      this.voitures = result;
    })
  }

  insertEntree(){
    this.entree.addEntree(this.entreeForm.value).subscribe(res=>{
      this.getAllEntrees();
      this.entreeForm.reset();
    })
  }

  send(event:string){
    if(event == "refresh")
      this.getAllEntrees()
  }

}
