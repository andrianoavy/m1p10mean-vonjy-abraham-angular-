import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-formulaire-voiture-page',
  templateUrl: './formulaire-voiture-page.component.html',
  styleUrls: ['./formulaire-voiture-page.component.css']
})
export class FormulaireVoiturePageComponent {
  voitureForm: FormGroup;
  loading = false;

  constructor(public formBuilder: FormBuilder, public voitureService: VoitureService) {
    this.voitureForm = this.formBuilder.group({
      numImmatricul: [''],
      marque: [''],
      modele: ['']
    })
  }

  saveVoiture() {
    this.loading = true;
    this.voitureService.addVoiture(this.voitureForm.value).subscribe((res) => {
      this.loading = false;
      if (res.acknowledged) {
        this.voitureForm.reset();
        this.emitRefresh();
      }
    },
    )
  }

  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  emitRefresh() {
    this.emitter.emit("refresh");
  }

}
