import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-page-factures',
  templateUrl: './page-factures.component.html',
  styleUrls: ['./page-factures.component.css']
})
export class PageFacturesComponent implements OnInit,OnDestroy{

  factures$:Subscription;
  factures:any[];
  search: string = '';
  showPaid:boolean = false;
  page:number = 0;
  itemCount:number = 10;
  total:number|undefined;
  isLoading: boolean = true;  

  constructor(private factureService:FactureService) {}

  ngOnDestroy(): void {
    this.factures$.unsubscribe();
}
  ngOnInit(): void {
    this.fetchFactures()
  }

  fetchFactures(){
    this.isLoading = true
    if(this.factures$)
    this.factures$.unsubscribe()
    this.factures$ = this.factureService.getFactures({page:this.page, itemCount:this.itemCount, search:this.search, showPaid:this.showPaid})
    .subscribe(
      {
        next: data => {
          this.factures = data.factures 
          this.page = data.page
          this.total = data.total
          this.isLoading = false
        },
        error: err => this.isLoading = false
      },
    )
  }

  changePage($event: PageEvent) {
    this.page = $event.pageIndex
    this.itemCount = $event.pageSize
    this.fetchFactures()
  }

}
