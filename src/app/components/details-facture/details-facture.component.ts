import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrls: ['./details-facture.component.css']
})
export class DetailsFactureComponent {

  idFacture: string | null;
  facture$: Observable<any>;

  constructor(private route: ActivatedRoute, private factureService: FactureService) {
  }

  ngOnInit(): void {
    this.idFacture = this.route.snapshot.paramMap.get('idFacture')
    this.facture$ = this.factureService.getFacture(this.idFacture)
  }

}
