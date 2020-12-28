import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private baseUrl = 'http://localhost:8080/fournisseur';

  constructor(private http: HttpClient) { }

  getFournisseur(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  addFournisseur(Fournisseur){
    return this.http.post(`${this.baseUrl}`,Fournisseur,{responseType:'text' as 'json'});
  }

  deleteFournisseur(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  putFournisseur(id:number,Fournisseur){
    return this.http.put(`${this.baseUrl}/${id}`,Fournisseur,{responseType:'text' as 'json'});
  }
}
