import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, USER_REGISTER } from '../../utils/const';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  registerUser(payload: any): Observable<any> {
    return this.http.post<any>(`${BASE_URL}${USER_REGISTER}`, payload);
  }

}
