import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { throwError,Observable,catchError } from 'rxjs';
import { Reparation } from '../models/reparation';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class StatistiqueFinanceService {

  constructor(private http:HttpClient,private authService:AuthService) { }

  base_url: string = environment.baseApiURL;

  findTempsMoyenReparation(): Observable<any>{
    return this.http.get(this.base_url+'/entree/tempsMoyenReparation').pipe(catchError(this.handleError));
  }

  findCAmois(): Observable<any>{
    return this.http.get(this.base_url+'/entree/chiffreAffaire/mois').pipe(catchError(this.handleError));
  }
  
  findCAjours(mois:number): Observable<any>{
    let params = new HttpParams().set('mois',mois)
    return this.http.get(this.base_url+'/entree/chiffreAffaire/jours',{params: params }).pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    console.error(error);
    
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
