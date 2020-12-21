
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = 'http://localhost:8080/produits';
  private baseUrl1 = 'http://localhost:8080/chercherProduits';
  
  echangerows: Array<any>;
  echangeprix: number;

  constructor(private http: HttpClient) { }

  getProduit(): Observable<any> {
   /*  console.log('aa11:::::'+ (this.http.get(`${this.baseUrl}`,{responseType:'text' as 'json'}).subscribe())); */
    return this.http.get(`${this.baseUrl}`);
  }
 
  addProduit(prod){
    return this.http.post(`${this.baseUrl}`,prod,{responseType:'text' as 'json'});
  }

  deleteProduit(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  putProduit(id:number,prod){
    return this.http.put(`${this.baseUrl}/${id}`,prod,{responseType:'text' as 'json'});
  }

  addqntProduit(id:number){
    return this.http.put(`${this.baseUrl}/addqnt/${id}`,{responseType:'text' as 'json'});
  }

  chercher(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl1}?name=${name}`,{responseType:'text' as 'json'});
  }

}
