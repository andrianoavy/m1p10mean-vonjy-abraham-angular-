import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-reparation-historique',
  templateUrl: './reparation-historique.component.html',
  styleUrls: ['./reparation-historique.component.css']
})
export class ReparationHistoriqueComponent implements OnInit, OnDestroy{

  immatriculation: string | null;
  voiture$: Subscription;
  voiture: any;
  page:number = 0;
  itemCount:number = 10;
  total:number|undefined;

  constructor(private route: ActivatedRoute, private voitureService: VoitureService) {
  }

  ngOnDestroy(): void {
      this.voiture$.unsubscribe();
  }

  ngOnInit(): void {
    this.immatriculation = this.route.snapshot.paramMap.get('immatriculation')
    this.fetchHistorique()
  }
  fetchHistorique() {
    this.voiture$ = this.voitureService.getVoitureWithHistorique(this.immatriculation,{page:this.page, itemCount:this.itemCount}).subscribe(
      (data) => {
        this.voiture = data.voiture
        this.page = data.page
        this.total = data.total
      }
    )
  }

  changePage($event: PageEvent) {
    this.page = $event.pageIndex
    this.itemCount = $event.pageSize
    this.fetchHistorique()
  }
}

