import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  endpoint: string = environment.baseApiURL + '/factures'

  getFactures(options: { page: number ; itemCount: number ; search: string ; showPaid: boolean  }):Observable<any> {
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
