import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  valider(id: any) :Observable<any>{
      return this.http.put(this.endpoint,{id:id}).pipe(catchError(this.handleError));
    }
  

  endpoint: string = environment.baseApiURL + '/paiement'

  addPaiement(paiement: any) : Observable<any>{
    return this.http.post(this.endpoint, paiement).pipe(catchError(this.handleError))
  }

  getPaiements(options: { page: number ; itemCount: number ; search: string ; showValid: boolean  }):Observable<any> {
    let api = this.endpoint;
    return this.http.get(api, {params:{...options}}).pipe(catchError(this.handleError));
  }

  constructor(private http: HttpClient) { }

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
