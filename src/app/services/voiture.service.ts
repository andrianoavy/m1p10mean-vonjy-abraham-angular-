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
  endpoint: string = environment.baseApiURL + '/voitures'

  getVoitures(): Observable<any> {
    return this.http.get(this.endpoint).pipe(catchError(this.handleError))
  }

  addVoitures(voiture: Voiture): Observable<any> {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.authService.getToken());

    return this.http.post(this.endpoint,voiture,{headers}).pipe(catchError(this.handleError))
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

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
