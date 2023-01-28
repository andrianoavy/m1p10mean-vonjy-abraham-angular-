import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FactureService } from 'src/app/services/facture.service';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-page-client-paiement',
  templateUrl: './page-client-paiement.component.html',
  styleUrls: ['./page-client-paiement.component.css']
})
export class PageClientPaiementComponent implements OnInit, OnDestroy{
  idFacture: string | null;
  facture$: Subscription;
  facture: any;
  paiementForm: FormGroup;
  loading = false;

  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private factureService: FactureService, public paiementService: PaiementService,private router:Router) {
    this.paiementForm = this.formBuilder.group({
      montant: [''],
      methode: [''],
    })
  }
  ngOnDestroy(): void {
    this.facture$.unsubscribe()
  }

  savePaiement() {
    this.loading = true;
    
    const paiement = {...this.paiementForm.value}
    paiement.idFacture = this.facture._id
    paiement.client = {id:this.facture.idUser,infos:this.facture.resumeUser}
    paiement.apayer = this.facture.totalTTC.montant
    paiement.dateFacture = this.facture.dateFacture

    this.paiementService.addPaiement(paiement).subscribe((data) => {
      this.loading = false;
      if (data.acknowledged) {
        this.paiementForm.reset();
        this.router.navigate(['voitures','factures'])
      }
    },
    )
  }

  ngOnInit(): void {    
    this.idFacture = this.route.snapshot.paramMap.get('idFacture')
    this.facture$ = this.factureService.getFacture(this.idFacture).subscribe({
      next:(data) => {
        if(data.paid){
          this.router.navigate(['voitures','factures'])
        }
        this.facture = data
        this.paiementForm.setValue({montant:this.facture.totalTTC.montant, methode:'espece'})
      }
    }
    )
  }

}
