import { Component, Input } from '@angular/core';

@Component({
  selector: 'tr[app-reparation-tr]',
  templateUrl: './reparation-tr.component.html',
  styleUrls: ['./reparation-tr.component.css']
})
export class ReparationTrComponent {
  @Input() reparation: any;
  getTotal(){
    let total = 0
    total += this.reparation.montantPrestation || 0
    total += this.reparation.montantAchat || 0
    return total
  }
}
