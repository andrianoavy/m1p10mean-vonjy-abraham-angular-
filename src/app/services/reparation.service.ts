import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { throwError,Observable,catchError } from 'rxjs';
import { Reparation } from '../models/reparation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient,private authService:AuthService) { }

  base_url: string = environment.baseApiURL+'/api/atelier';

  findReparation(entree_id:any): Observable<any>{
    let params = new HttpParams().set('id',entree_id)
    return this.http.get(this.base_url+'/entree/reparations',{params: params }).pipe(catchError(this.handleError));
  }

  addReparation(reparation : Reparation):Observable<any>{
    return this.http.post(this.base_url + '/reparation',reparation).pipe(catchError(this.handleError));
  }

  updateReparation(dataBody:any):Observable<any>{
    return this.http.put(this.base_url + '/update/reparation',dataBody).pipe(catchError(this.handleError));
  }

  getInfoEntree(entree_id:any):Observable<any>{
    let params = new HttpParams().set('id',entree_id);
    return this.http.get(this.base_url+'/entree/info',{params: params }).pipe(catchError(this.handleError));
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
