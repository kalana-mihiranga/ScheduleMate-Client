import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../shared/toast.service';
import { CommonService } from '../common.service';
import { LOGIN_MODEL } from '../../../utils/model/userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgbAlert, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor( private toastService: ToastService, private commonService: CommonService, private router: Router ) {}

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

  loginPayload: LOGIN_MODEL = {
    email: "",
    password: ""
  }

  login() {
    this.loginFormValidation();

    if (Object.keys(this.loginFormError).length == 0) {
      this.loginPayload = {
        email: this.email,
        password: this.password
      }

      this.commonService.loginUser(this.loginPayload).subscribe(
        (response) => {
          if (response.status == 200) {
            this.showToastMessage('Success!', ['Login Success.'], 'White', '#21db21', 'bi bi-check-circle-fill');
            this.clearLoginForm();

            this.commonService.setItem("ID", (response.id).toString());
            this.commonService.setItem("ROLE", response.role);
            this.commonService.setItem("NAME", response.name);
            this.commonService.setItem("EMAIL", response.email);

            if (response.role == "CLIENT") {
              this.router.navigate(['/clientHome']);
            } else {
              this.router.navigate(['/businessLanding']);
            }
          } else {
            this.showToastMessage('Warning!', ['Internal Server Error.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
          }
        },
        (error) => {
          this.showToastMessage('Warning!', [error.error.message], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
          console.error('Error of registering client : ', error);
        }
      );

    } else {
      this.showToastMessage('Warning!', ['Invalid Input, Check Again.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
    }
  }

  clearLoginForm() {
    this.email = '';
    this.password = '';

    this.loginPayload = {
      email: "",
      password: ""
    }
  }

  showToastMessage( header: string, body: string[], color: string, backgroundColor: string, icon: string) {
    this.toastService.show(header, body, color, backgroundColor, icon);
  }
}
