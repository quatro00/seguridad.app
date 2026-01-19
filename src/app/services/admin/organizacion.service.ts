import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  service:string = 'admin/organizacion';


  constructor(private http:HttpClient) { }

  GetAll():Observable<any>{
    let params = new HttpParams();
    return this.http.get<any>(`${environment.apiUrl}/${this.service}`);
  }

  GetById(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/${this.service}/${id}`);
  }

  Update(id:string, request:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/${this.service}/${id}`,request);
  }

  Crear(request:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/${this.service}`,request);
  }

  Desactivar(id:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/${this.service}/${id}/desactivar`,{});
  }

  Activar(id:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/${this.service}/${id}/activar`,{});
  }
  

}