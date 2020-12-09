
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = 'http://localhost:8080/produits';
  

  constructor(private http: HttpClient) { }

  getProduit(): Observable<any> {
   /*  console.log('aa11:::::'+ (this.http.get(`${this.baseUrl}`,{responseType:'text' as 'json'}).subscribe())); */
    return this.http.get(`${this.baseUrl}`);
  }
 
  putProduit(id:number,prod){
    return this.http.put(`${this.baseUrl}/${id}`,prod,{responseType:'text' as 'json'});
  }

  addqntProduit(id:number){
    return this.http.put(`${this.baseUrl}/addqnt/${id}`,{responseType:'text' as 'json'});
  }
}