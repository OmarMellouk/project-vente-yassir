import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/client';

  constructor(private http: HttpClient) { }

  getClient(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  addClient(Client){
    return this.http.post(`${this.baseUrl}`,Client,{responseType:'text' as 'json'});
  }

  deleteClient(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  putClient(id:number,Client){
    return this.http.put(`${this.baseUrl}/${id}`,Client,{responseType:'text' as 'json'});
  }
}
