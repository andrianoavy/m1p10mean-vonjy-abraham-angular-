import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Voiture } from '../models/Voiture';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  getVoitureWithHistorique(immatriculation: string | null, params?:{page?: number, itemCount?: number}): Observable<any> {
    return this.http.get(`${this.endpoint}/client/historique/${immatriculation}`,{params:{...params}}).pipe(catchError(this.handleError))
  }
 
  endpoint: string = environment.baseApiURL + '/voitures'

  getVoitureWithReparation(immatriculation:any){
    return this.http.get(`${this.endpoint}/client/${immatriculation}`).pipe(catchError(this.handleError))
  }

  findVoitures(): Observable<any> {
    return this.http.get(this.endpoint+'/all').pipe(catchError(this.handleError))
  }

  getVoitures(): Observable<any> {
    return this.http.get(this.endpoint).pipe(catchError(this.handleError))
  }

  addVoiture(voiture: Voiture): Observable<any> {

    return this.http.post(this.endpoint,voiture).pipe(catchError(this.handleError))
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  findVoituresByString(searchText: string): Observable<any> {
    return this.http.get(`${this.endpoint}?search=${searchText.trim()}`).pipe(catchError(this.handleError))
  }

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
