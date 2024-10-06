import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgbAlert, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    this.loginSuccess = false;
    this.loginFailed = true;
  }

  clearLoginForm() {
    this.email = '';
    this.password = '';
  }

  loginFailed: boolean = false;
  loginSuccess: boolean = false;

  closeEAlert(): void {
    this.loginFailed = false;
  }

  closeSAlert(): void {
    this.loginSuccess = false;
  }
}
