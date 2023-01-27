import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatistiqueFinanceService } from 'src/app/services/statistique-finance.service';
Chart.register(...registerables);

@Component({
  selector: 'app-statistique-finance',
  templateUrl: './statistique-finance.component.html',
  styleUrls: ['./statistique-finance.component.css'],
})
export class StatistiqueFinanceComponent {
  constructor(private statService: StatistiqueFinanceService) {}

  tempsMoyenReparation: any;

  annee: number = new Date().getFullYear();
  month: number = new Date().getMonth();
  mois: number = this.month + 1;

  chartJour :any;

  ngOnInit() {
    this.tempsMoyen();
    this.dataChartParMois();
    this.dataChartParJour();
  }

  onChange(value: any) {
    this.mois = value.target.value;
    this.chartJour.destroy();
    this.dataChartParJour();
  }

  tempsMoyen() {
    this.statService.findTempsMoyenReparation().subscribe((result) => {
      this.tempsMoyenReparation = result.data.toFixed(2);
    });
  }

  dataChartParMois() {
    var data: Array<number> = [];

    this.statService.findCAmois().subscribe((result) => {
      let dataDb = result.data;
      for (let i = 0; i < 12; i++) {
        if (dataDb[i] == null) {
          data.push(0);
        } else {
          data.push(dataDb[i].totalPrestation + dataDb[i].totalAchat);
        }
      }
      this.CAMois(data);
    });
  }

  dataChartParJour() {
    console.log(this.mois);
    var data: Array<number> = [];
    var label: Array<string> = [];
    const nombreJour = new Date(2023, this.mois, 0).getDate();
    this.statService.findCAjours(this.mois).subscribe((result) => {
      let dataDb = result.data;
      for (let i = 0; i < nombreJour; i++) {
        if (dataDb[i] == null) {
          data.push(0);
        } else {
          data.push(dataDb[i].totalPrestation + dataDb[i].totalAchat);
        }
        label.push('' + (i + 1));
      }
      this.CAJours(data, label);
    });
  }

  CAMois(dataCA: any) {
    var myChart = new Chart('myChartMois', {
      type: 'bar',
      data: {
        labels: [
          'Janvier',
          'Fevrier',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'juilet',
          'Aout',
          'Septembre',
          'Octobre',
          'Novembre',
          'Decembre',
        ],
        datasets: [
          {
            label: 'Montant par mois',
            data: dataCA,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  CAJours(dataCA: any, labelCA: any) {
    this.chartJour = new Chart('myChartJours', {
      type: 'line',
      data: {
        labels: labelCA,
        datasets: [
          {
            label: 'Montant par jour',
            data: dataCA,
            backgroundColor: ['rgba(12, 206, 255, 1)'],
            borderColor: ['rgba(12, 206, 255, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
