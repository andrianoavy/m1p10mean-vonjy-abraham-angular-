import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReparationService } from 'src/app/services/reparation.service';

@Component({
  selector: 'app-liste-repation',
  templateUrl: './liste-repation.component.html',
  styleUrls: ['./liste-repation.component.css'],
})
export class ListeRepationComponent {
  entree_id: string = '';

  reparationForm : FormGroup;

  reparations : any[];

  todos = [
    {
      name: 'Angular',
      category: 'Web Development',
    },
    {
      name: 'Flexbox',
      category: 'Web Development',
    },
    {
      name: 'iOS',
      category: 'App Development',
    },
    {
      name: 'Java',
      category: 'Software development',
    },
  ];

  completed = [
    {
      name: 'Android',
      category: 'Mobile Development',
    },
    {
      name: 'MongoDB',
      category: 'Databases',
    },
    {
      name: 'ARKit',
      category: 'Augmented Reality',
    },
    {
      name: 'React',
      category: 'Web Development',
    },
  ];

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
  }

  getAllEntrees(){
    this.reparation.findReparation().subscribe(result => {
      this.reparations = result.data;
    })
  }

  insertReparation(){
      this.reparation.addReparation(this.reparationForm.value).subscribe(res=>{
        this.reparationForm.reset();
      })
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
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
    }
  }
}
