import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReparationService } from 'src/app/services/reparation.service';
import { Reparation } from 'src/app/models/reparation';

@Component({
  selector: 'app-liste-repation',
  templateUrl: './liste-repation.component.html',
  styleUrls: ['./liste-repation.component.css'],
})
export class ListeRepationComponent {
  entree_id: string = '';

  reparationForm : FormGroup;

  infoEntree : any[];
  reparations : any[];

  todos:Reparation[]=[];

  completed:Reparation[]=[];

  constructor(private routeActive: ActivatedRoute,public formBuilder: FormBuilder,private reparation: ReparationService) {
    this.reparationForm = this.formBuilder.group({
      entreeId : [''],
      description : [''],
      designationPrestation :[''],
      montantPrestation :[''],
      designationAchat :[''],
      montantAchat :[''],
      dateDebut :[''],
      dateFin :['']
    })
  }

  ngOnInit() {
    this.routeActive.queryParams.subscribe((params) => {
      this.entree_id = params['entree_id'];
    });
    this.getInfoEntree();
    this.getAllReparation();
  }

  getInfoEntree(){
    this.reparation.getInfoEntree(this.entree_id).subscribe(result=>{
      this.infoEntree = result.data;
    })
  }

  getAllReparation(){
    this.reparation.findReparation(this.entree_id).subscribe(result => {
      let data = result.data;
      for(let i = 0; i < data.length;i++){
        if(data[i].Etat == "Terminer"){
          this.completed.push(data[i]);
        }
        else{
          this.todos.push(data[i])
        }
      }
    })
  }

  insertReparation(){
      this.reparation.addReparation(this.reparationForm.value).subscribe(res=>{
        this.getAllReparation();
        this.reparationForm.reset();
      })
  }

  onDrop(event: CdkDragDrop<Reparation[]>) {
    if (event.previousContainer === event.container) {
      console.log('move :'+event.container.data);      
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const dataTerminer = event.container.data;
      for(let i = 0; i < dataTerminer.length;i++){
        const body = {
          "entreeId": this.entree_id,
          "reparationId": dataTerminer[i].reparationId
        };
        this.reparation.updateReparation(body).subscribe(res=>{
          console.log("updated");      
        });
      }
    }
  }
}
