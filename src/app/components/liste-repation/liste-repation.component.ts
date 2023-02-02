import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ReparationService } from 'src/app/services/reparation.service';
import { Reparation } from 'src/app/models/reparation';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-liste-repation',
  templateUrl: './liste-repation.component.html',
  styleUrls: ['./liste-repation.component.css'],
})
export class ListeRepationComponent {
  entree_id: string = '';

  reparationForm: FormGroup;

  infoEntree: any[];
  reparations: any[];

  todos: Reparation[] = [];

  completed: Reparation[] = [];

  modalModification: boolean = false;

  submitted = false;

  constructor(
    private routeActive: ActivatedRoute,
    public formBuilder: FormBuilder,
    private reparation: ReparationService
  ) {}

  ngOnInit() {
    this.routeActive.queryParams.subscribe((params) => {
      this.entree_id = params['entree_id'];
    });

    this.getInfoEntree();
    this.getAllReparation();

    this.reparationForm = this.formBuilder.group(
      {
        entreeId: ['', Validators.required],
        description: ['', Validators.required],
        designationPrestation: ['', Validators.required],
        montantPrestation: [
          '',
          [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
        ],
        designationAchat: ['', Validators.required],
        montantAchat: [
          '',
          [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
        ],
        dateDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
      },
      {
        validators: [Validation.controlDate('dateDebut', 'dateFin')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reparationForm.controls;
  }

  getInfoEntree() {
    this.reparation.getInfoEntree(this.entree_id).subscribe((result) => {
      this.infoEntree = result.data;
    });
  }

  getAllReparation() {
    this.reparation.findReparation(this.entree_id).subscribe((result) => {
      let data = result.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].Etat == 'Terminer') {
          this.completed.push(data[i]);
        } else {
          this.todos.push(data[i]);
        }
      }
    });
  }

  insertReparation() {
    this.submitted = true;

    if (this.reparationForm.invalid) {
      return;
    }
    this.reparation
      .addReparation(this.reparationForm.value)
      .subscribe((res) => {
        this.getAllReparation();
        this.reparationForm.reset();
        window.location.reload();
      });
  }

  onDrop(event: CdkDragDrop<Reparation[]>) {
    if (event.previousContainer === event.container) {
      console.log('move :' + event.container.data);
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
      for (let i = 0; i < dataTerminer.length; i++) {
        const body = {
          entreeId: this.entree_id,
          reparationId: dataTerminer[i].reparationId,
        };
        this.reparation.updateReparation(body).subscribe((res) => {});
      }
    }
  }

  onValideSortie() {
    const body = {
      entreeId: this.entree_id,
    };
    this.reparation.updateEntree(body).subscribe((res) => {
      window.location.reload();
    });
  }

  onDeleteEntree(reparationId: any) {
    const body = {
      entreeId: this.entree_id,
      reparationId: reparationId,
    };
    this.reparation.deleteReparation(body).subscribe((res) => {
      window.location.reload();
    });
  }

  onModification(reparationId: any) {
    console.log(reparationId);
    this.modalModification = true;
  }

  closeModal() {
    this.modalModification = false;
  }

  creatDateRangeValidator() {
    const form = this.reparationForm.value;

    const start: Date = form.dateDebut;
    const end: Date = form.dateFin;

    if (start && end) {
      const isRangeValid = end.getTime() - start.getTime() > 0;

      return isRangeValid ? null : { dateRange: true };
    }

    return null;
  }
}
