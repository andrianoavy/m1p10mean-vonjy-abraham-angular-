import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liste-entrees-historique',
  templateUrl: './liste-entrees-historique.component.html',
  styleUrls: ['./liste-entrees-historique.component.css']
})
export class ListeEntreesHistoriqueComponent {
  @Input() entrees: any[];

  constructor(private currencyPipe: CurrencyPipe, private datePipe: DatePipe) { }

  getTotal(entree: any) {
    let total = 0
    if (!entree.reparations
      || (Array.isArray(entree.reparations) && entree.reparations.length == 0))
      return "Attente de diagnostique..."
    if (entree.reparations)
      for (let index = 0; index < entree.reparations.length; index++) {
        total += entree.reparations[index].montantPrestation || 0
        total += entree.reparations[index].montantAchat || 0
      }
    if (total === 0)
      return "Pas de montant"
    return this.currencyPipe.transform(total, 'MGA', 'symbol-narrow', '4.1-1')
  }

  getPeriode(entree: any) {
    const dateE = this.datePipe.transform(entree.dateEntree, 'shortDate')
    const dateS = (entree.dateSortie) ? this.datePipe.transform(entree.dateSortie, 'shortDate') : null
    if (dateS)
      return `${dateE} à ${dateS}`
    return `${dateE} à maintenant`
  }
}
