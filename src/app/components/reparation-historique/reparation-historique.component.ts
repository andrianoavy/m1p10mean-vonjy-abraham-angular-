import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-reparation-historique',
  templateUrl: './reparation-historique.component.html',
  styleUrls: ['./reparation-historique.component.css']
})
export class ReparationHistoriqueComponent {
  immatriculation: string | null;
  voiture$: Observable<any>;
  page:number = 1;

  constructor(private route: ActivatedRoute, private voitureService: VoitureService) {
  }

  ngOnInit(): void {
    this.immatriculation = this.route.snapshot.paramMap.get('immatriculation')
    this.voiture$ = this.voitureService.getVoitureWithHistorique(this.immatriculation)  
  }
}
