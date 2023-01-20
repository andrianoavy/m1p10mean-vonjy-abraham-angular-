import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { throwError,Observable,catchError } from 'rxjs';
import { Reparation } from '../models/reparation';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient) { }

  base_url: string = environment.baseApiURL+'/api/atelier';

  findReparation(): Observable<any>{
    return this.http.get(this.base_url+'/reparations').pipe(catchError(this.handleError));
  }

  addReparation(reparation : Reparation):Observable<any>{
    return this.http.post(this.base_url + '/reparation',reparation).pipe(catchError(this.handleError));
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
