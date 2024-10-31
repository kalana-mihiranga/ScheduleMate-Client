import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_BUSINESS_PACKAGE, BASE_URL, CREATE_SERVICE, GET_PACKAGE, GET_PACKAGES, GET_SERVICES } from '../../utils/const';
import { ADD_PACKAGE_MODEL, ADD_SERVICE_MODEL } from '../../utils/model/businessModel';

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

  public getBusinessServices(businessId: number, page: number, pageSize: number): Observable<any> {
    const params = new HttpParams().set('page', page).set('size', pageSize);
    return this.http.get<any>(`${BASE_URL}${GET_SERVICES}${businessId}`, {params});
  }

  public submitBusinessPackage(payload: ADD_PACKAGE_MODEL): Observable<any> {
    return this.http.post<any>(`${BASE_URL}${ADD_BUSINESS_PACKAGE}`, payload);
  }

  public getBusinessPackages(businessId: number, pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams().set('page', pageNumber).set('size', pageSize);
    return this.http.get<any>(`${BASE_URL}${GET_PACKAGES}${businessId}`, { params });
  }

}
