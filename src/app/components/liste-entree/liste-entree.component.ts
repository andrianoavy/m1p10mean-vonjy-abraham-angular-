import { Component } from '@angular/core';
import { throwError,Observable,catchError } from 'rxjs';
import { EntreeService } from 'src/app/services/entree.service';


@Component({
  selector: 'app-liste-entree',
  templateUrl: './liste-entree.component.html',
  styleUrls: ['./liste-entree.component.css']
})
export class ListeEntreeComponent {
  entrees: any[];
  entreesObs : Observable<any>;

  constructor(private entree: EntreeService) {
  }

  ngOnInit(){
    this.getAllEntrees();
  }

  getAllEntrees(){
    this.entreesObs = this.entree.findEntrees();
    this.entreesObs.subscribe(result => {
      this.entrees = result.data;
    })
  }

  send(event:string){
    if(event == "refresh")
      this.getAllEntrees()
  }

}
