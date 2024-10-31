import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, CREATE_SERVICE, GET_PACKAGE, GET_SERVICES } from '../../utils/const';
import { ADD_SERVICE_MODEL } from '../../utils/model/businessModel';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  public createService(payload: ADD_SERVICE_MODEL): Observable<any> {
    return this.http.post<any>(`${BASE_URL}${CREATE_SERVICE}`, payload);
  }
  
  public getPackages(businessId: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}${GET_PACKAGE}${businessId}`);
  }

  public getBusinessServices(businessId: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}${GET_SERVICES}${businessId}`);
  }

}
