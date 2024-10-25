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

  constructor(

    private toastService: ToastService,

  ) {}

  ngOnInit(){
    this.showToastMessage(
      'Warning!',
      ['Error subProduct Loading'],
      'White',
      '#FCC200',
      'bi bi-exclamation-triangle-fill'
    );
  }
  email: string = '';
  password: string = '';



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

  showToastMessage(
    header: string,
    body: string[],
    color: string,
    backgroundColor: string,
    icon: string
  ) {
    this.toastService.show(header, body, color, backgroundColor, icon);
  }
}
