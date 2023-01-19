import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { Voiture } from 'src/app/models/Voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voitures-liste',
  templateUrl: './voitures-liste.component.html',
  styleUrls: ['./voitures-liste.component.css']
})
export class VoituresListeComponent implements OnInit, OnDestroy {

  voituresObs: Observable<any[]>;

  searchText: string = "";

  searchNotifier = new Subject<string>();

  ngOnInit() {
    this.fetchVoitures()
    this.searchNotifier
      .pipe(distinctUntilChanged())
      .pipe(debounceTime(500))
      .subscribe(data => this.filterVoitures(this.searchText));
  }
  ngOnDestroy() {
    this.searchNotifier.complete()
  }

  fetchVoitures() {
    this.voituresObs = this.service.getVoitures();
  }
  filterVoitures(searchText: string) {
    this.voituresObs = this.service.findVoituresByString(searchText).pipe(takeUntil(this.searchNotifier));
  }


  constructor(private service: VoitureService) {
  }

  send(event: string) {
    if (event == "refresh") {
      this.searchText = ''
      this.fetchVoitures()
    }
  }

  applyFilter(event: KeyboardEvent) {
    if (this.searchText.length > 2) {
      this.searchNotifier.next(this.searchText)
    }
  }

}
