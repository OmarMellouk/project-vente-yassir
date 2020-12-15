import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrixjornalService {

  private baseUrljornal = 'http://localhost:8080/Prixjornal';
  constructor(private http: HttpClient) { }

  getJornal(): Observable<any> {
     return this.http.get(`${this.baseUrljornal}`);
   }
  addJornal(jornal){
    return this.http.post(`${this.baseUrljornal}`,jornal,{responseType:'text' as 'json'});
  }
}
