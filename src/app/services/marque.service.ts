import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  private baseUrl = 'http://localhost:8080/marques';
  private baseUrl1 = 'http://localhost:8080/chercherMarques';

  constructor(private http: HttpClient) { }

  getMarquetst(): Observable<any> {
    console.log('aa11:::::'+ JSON.stringify(this.http));
    return this.http.get(`${this.baseUrl}`);
  }

  /* getMarquetstById(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`,{responseType:'text' as 'json'});
  } */

  chercher(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl1}?name=${name}`,{responseType:'text' as 'json'});
  }

  deleteMarque(id:number): Observable<any>{

    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addmarque(marq){
    return this.http.post(`${this.baseUrl}`,marq,{responseType:'text' as 'json'});
  }


  putmarque(id:number,marq){
    return this.http.put(`${this.baseUrl}/${id}`,marq,{responseType:'text' as 'json'});
  }
}
