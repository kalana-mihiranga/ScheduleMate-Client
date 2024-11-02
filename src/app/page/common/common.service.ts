import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_URL, BASE_URL, GET_SERVICE_FEED, USER_LOGIN, USER_REGISTER } from '../../utils/const';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  registerUser(payload: any): Observable<any> {
    return this.http.post<any>(`${BASE_URL}${USER_REGISTER}`, payload);
  }

  loginUser(payload: any): Observable<any> {
    return this.http.post<any>(`${AUTH_URL}${USER_LOGIN}`, payload);
  }

  getServiceFeed(searchKey: string): Observable<any> {
    const params = new HttpParams().set('name', searchKey);
    return this.http.get<any>(`${BASE_URL}${GET_SERVICE_FEED}`, { params });
  }

  // Access local storage with checks
  setItem(key: string, value: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string): string | null {
    if (typeof localStorage !== 'undefined') {
      const item = localStorage.getItem(key);
      if (item === null) {
        console.warn(`Item with key "${key}" not found in local storage.`);
      }
      return item;
    } else {
      return null;
    }
  }

  removeItem(key: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }
  
}
