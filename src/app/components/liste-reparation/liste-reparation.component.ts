import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-reparation',
  templateUrl: './liste-reparation.component.html',
  styleUrls: ['./liste-reparation.component.css']
})
export class ListeReparationComponent {

  entreeId : string;

  constructor(){}

  ngOnInit(){
    // this.route.queryParams
    //   .subscribe(params => {
    //     console.log(params); // { orderby: "price" }
    //     this.entreeId = params['entree_id'];
    //     console.log(this.entreeId); // price
    //   }
    // );
  }
}
