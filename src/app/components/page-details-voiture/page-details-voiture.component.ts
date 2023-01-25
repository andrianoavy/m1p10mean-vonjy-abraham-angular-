import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-page-details-voiture',
  templateUrl: './page-details-voiture.component.html',
  styleUrls: ['./page-details-voiture.component.css']
})
export class PageDetailsVoitureComponent implements OnInit {
  immatriculation: string | null;
  // voiture: any;
  voiture$: Observable<any>;

  constructor(private route: ActivatedRoute, private voitureService: VoitureService) {
  }

  ngOnInit(): void {
    this.immatriculation = this.route.snapshot.paramMap.get('immatriculation')
    this.voiture$ = this.voitureService.getVoitureWithReparation(this.immatriculation)
  }
}
