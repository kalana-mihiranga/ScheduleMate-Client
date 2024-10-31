import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgbAlert, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor( private toastService: ToastService ) {}

  email: string = '';
  password: string = '';

  loginFormError: { [key: string]: string } = {};

  loginFormValidation(): void {
    this.loginFormError = {};

    if (this.email == '') {
      this.loginFormError['emailRequired'] =
        'Email required';
    }

    if (this.password == '') {
      this.loginFormError['passwordRequired'] =
        'Password required';
    }    
  }

  login() {
    this.loginFormValidation();

    if (Object.keys(this.loginFormError).length == 0) {
      this.showToastMessage('Success!', ['Successfully Login.'], 'White', '#21db21', 'bi bi-check-circle-fill');
    } else {
      this.showToastMessage('Warning!', ['Invalid Input, Check Again.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
    }
  }

  clearLoginForm() {
    this.email = '';
    this.password = '';
  }

  showToastMessage( header: string, body: string[], color: string, backgroundColor: string, icon: string) {
    this.toastService.show(header, body, color, backgroundColor, icon);
  }
}
