import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reparation-table',
  templateUrl: './reparation-table.component.html',
  styleUrls: ['./reparation-table.component.css']
})
export class ReparationTableComponent {
@Input() entree:any;
}
