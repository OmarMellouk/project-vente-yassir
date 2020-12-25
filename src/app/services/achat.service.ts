import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  private baseUrl = 'http://localhost:8080/achat';

  constructor(private http: HttpClient) { }

  getAchat(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  addAchat(achat){
    return this.http.post(`${this.baseUrl}`,achat,{responseType:'text' as 'json'});
  }

  deleteAchat(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
