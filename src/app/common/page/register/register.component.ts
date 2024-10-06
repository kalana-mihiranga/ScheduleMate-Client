import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

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
