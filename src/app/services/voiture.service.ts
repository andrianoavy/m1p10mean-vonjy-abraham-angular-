import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Voiture } from '../models/Voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  endpoint: string = environment.baseApiURL+'/voitures'
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // getVoitures(): Voiture[] {
  //   return [
  //     {_id:"test", Marque:"Peugeot", Modele:"405",numImmatricul:"0405 TAC", idClient:"bema" },
  //     {_id:"test2", Marque:"Peugeot", Modele:"205",numImmatricul:"0420 TAC", idClient:"solo" },
  //   ];
  // }

  getVoitures(): Observable<any>{
    return this.http.get(this.endpoint).pipe(catchError(this.handleError))
  }

  constructor(private http:HttpClient) { }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }
}
