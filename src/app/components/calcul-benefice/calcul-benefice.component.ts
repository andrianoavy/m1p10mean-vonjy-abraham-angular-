import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatistiqueFinanceService } from 'src/app/services/statistique-finance.service';

@Component({
  selector: 'app-calcul-benefice',
  templateUrl: './calcul-benefice.component.html',
  styleUrls: ['./calcul-benefice.component.css']
})
export class CalculBeneficeComponent {
  annee: number = new Date().getFullYear();
  month: number = new Date().getMonth();

  beneficeForm : FormGroup;

  chiffreAffaire :any;
  achatPieces :any;
  benefice : any;
  salaire:any;
  loyer:any;
  autres:any;

  constructor(private routeActive: ActivatedRoute,public formBuilder: FormBuilder,private statService : StatistiqueFinanceService) {
    this.beneficeForm = this.formBuilder.group({
      mois : [''],
      DesignationSalaire : [''],
      salaire :[''],
      montantPrestation :[''],
      designationLoyer :[''],
      loyer :[''],
      designationAutres :[''],
      autres :['']
    })
  }

  calculBenefice(){
    this.statService.findCAmois().subscribe((result) => {
      let form = this.beneficeForm.value;

      this.salaire = form.salaire;
      this.loyer = form.loyer;
      this.autres = form.autres;

      let dataDb = result.data;
      form.mois = form.mois -1;
      if(dataDb[form.mois]){
        this.achatPieces = dataDb[form.mois].totalAchat;
        this.chiffreAffaire = dataDb[form.mois].totalPrestation;
        this.benefice = dataDb[form.mois].totalPrestation - (dataDb[form.mois].totalAchat + form.salaire +form.loyer + form.autres);
      }else{
        this.achatPieces = 0;
        this.chiffreAffaire = 0;
        this.benefice = 0 - (form.salaire +form.loyer + form.autres)
      }
    });
  }
}
