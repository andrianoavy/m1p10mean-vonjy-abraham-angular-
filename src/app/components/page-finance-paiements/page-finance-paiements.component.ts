import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged, Subject, Subscription, takeUntil } from 'rxjs';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-page-finance-paiements',
  templateUrl: './page-finance-paiements.component.html',
  styleUrls: ['./page-finance-paiements.component.css']
})
export class PageFinancePaiementsComponent {

  paiement$:Subscription;
  paiements:any[];
  search: string = '';
  showValid:boolean = false;
  page:number = 0;
  itemCount:number = 10;
  total:number|undefined;
  isLoading: boolean = true;  
  searchNotifier = new Subject<string>();



  constructor(private paiementService:PaiementService) {}

  ngOnDestroy(): void {
    this.paiement$.unsubscribe();
    this.searchNotifier.complete()

}
  ngOnInit(): void {
    this.fetchPaiements()
    
  this.searchNotifier
  .pipe(distinctUntilChanged())
  .pipe(debounceTime(500))
  .subscribe(data => this.filterPaiements());
  }
  filterPaiements(): void {
    this.isLoading = true
    if(this.paiement$)
    this.paiement$.unsubscribe()
    this.paiement$ = this.paiementService.getPaiements({page:this.page, itemCount:this.itemCount, search:this.search, showValid:this.showValid})
    .pipe(takeUntil(this.searchNotifier))
    .subscribe(
      {
        next: data => {
          this.paiements = data.paiements 
          this.page = data.page
          this.total = data.total
          this.isLoading = false
        },
        error: err => this.isLoading = false
      },
    )
  }

  fetchPaiements(){
    this.isLoading = true
    if(this.paiement$)
    this.paiement$.unsubscribe()
    this.paiement$ = this.paiementService.getPaiements({page:this.page, itemCount:this.itemCount, search:this.search, showValid:this.showValid})
    .subscribe(
      {
        next: data => {
          this.paiements = data.paiements 
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
    this.fetchPaiements()
  }

  validerPaiement(id:any,btnId:string){
    this.loadBtn(btnId)
    this.paiementService.valider(id).subscribe({
      next:(data)=>{

      }
    })
    this.unloadBtn(btnId)
  }

  unloadBtn(id: any) {
    const btn  = document.getElementById(id)
    const span = document.getElementById('badge'+id)
    btn?.remove()
    span?.setAttribute('class','badge paid')
    span?.replaceChildren('Valide')
  }

  loadBtn(id:string){
    const btn  = document.getElementById(id)
    btn?.setAttribute('aria-busy','true')
  }

  applyFilter(event: KeyboardEvent) {
    if (this.search.length > 2) {
      this.searchNotifier.next(this.search)
    }
  }

  refresh(){
    this.search = ''
    this.fetchPaiements()
  }

}
