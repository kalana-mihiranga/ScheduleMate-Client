import { Injectable } from '@angular/core';
export interface ToastInfo {
  color:string,
  header: string;
  body: string[];
  delay?: number;
  icon:string;
  backgroundColor:string;
}
@Injectable({
  providedIn: 'root'
})


export class ToastService {

  constructor() { }
  toasts: ToastInfo[] = [];

  show(header: string, body: string[],color:string,backgroundColor:string,icon:string) {
    this.toasts.push({ header, body, color,backgroundColor,icon});
  }
}
