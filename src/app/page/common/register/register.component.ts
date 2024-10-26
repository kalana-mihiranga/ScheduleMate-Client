import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { USER_MODEL } from '../../../utils/model/userModel';
import { CommonModule } from '@angular/common';
import { isValidEmail } from '../../../utils/common';
import { CommonService } from '../common.service';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgbNavModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  active: number = 1;
  dateOfBirth: string = '';
  homeAddress: string = '';

  //client
  firstName: string = '';
  lastName: string = '';
  clientEmail: string = '';
  clientPhoneNumber: string = '';
  clientPassword: string = '';
  clientConfirmPassword: string = '';

  //Business
  businessName: string = '';
  businessEmail: string = '';
  businessPhoneNumber: string = '';
  businessPassword: string = '';
  businessConfirmPassword: string = '';

  userModel: USER_MODEL = {
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    homeAddress: '',
    password: '',
    role: '',
  };

  constructor(private commonService: CommonService, private toastService: ToastService) {}

  clientRegistrationFormError: { [key: string]: string } = {};

  clientRegistrationFormValidation(): void {
    this.clientRegistrationFormError = {};

    if (this.firstName == '') {
      this.clientRegistrationFormError['cfNameRequired'] =
        'First Name is required';
    }

    if (this.lastName == '') {
      this.clientRegistrationFormError['clNameRequired'] =
        'Last Name is required';
    }

    if (this.clientEmail == '') {
      this.clientRegistrationFormError['cemailRequired'] = 'Email is required';
    }

    if (this.clientEmail != '' && !isValidEmail(this.clientEmail)) {
      this.clientRegistrationFormError['cemailNotValid'] = 'Email is not valid';
    }

    if (this.clientPhoneNumber == '') {
      this.clientRegistrationFormError['cPNumberRequired'] =
        'Phone number is required';
    }

    if (this.clientPassword == '') {
      this.clientRegistrationFormError['cPwRequired'] = 'Password is required';
    }

    if (this.clientConfirmPassword == '') {
      this.clientRegistrationFormError['cCPwRequired'] =
        'Confirm Password is required';
    }

    if (
      this.clientPassword != '' &&
      this.clientConfirmPassword != '' &&
      this.clientPassword != this.clientConfirmPassword
    ) {
      this.clientRegistrationFormError['passwordNotEqual'] =
        'Both password should equal';
    }
  }

  businessRegistrationFormError: { [key: string]: string } = {};

  businessRegistrationFormValidation(): void {
    this.businessRegistrationFormError = {};

    if (this.businessName == '') {
      this.businessRegistrationFormError['bNameRequired'] = 'Name is required';
    }

    if (this.businessEmail == '') {
      this.businessRegistrationFormError['bEmailRequired'] =
        'Email is required';
    }

    if (this.businessEmail != '' && !isValidEmail(this.businessEmail)) {
      this.businessRegistrationFormError['bEmailNotValid'] =
        'Email is not valid';
    }

    if (this.businessPhoneNumber == '') {
      this.businessRegistrationFormError['bPNumberRequired'] =
        'Phone number is required';
    }

    if (this.businessPassword == '') {
      this.businessRegistrationFormError['bPwRequired'] =
        'Password is required';
    }

    if (this.businessConfirmPassword == '') {
      this.businessRegistrationFormError['bCPwRequired'] =
        'Confirm Password is required';
    }

    if (
      this.businessPassword != '' &&
      this.businessConfirmPassword != '' &&
      this.businessPassword != this.businessConfirmPassword
    ) {
      this.businessRegistrationFormError['passwordNotEqual'] =
        'Both password should equal';
    }
  }

  onRegister() {
    if (this.active == 1) {
      this.clientRegistrationFormValidation();

      if (Object.keys(this.clientRegistrationFormError).length === 0) {
        this.userModel = {
          name: '',
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.clientEmail,
          phoneNumber: this.clientPhoneNumber,
          dateOfBirth: this.dateOfBirth,
          homeAddress: this.homeAddress,
          password: this.clientPassword,
          role: 'CLIENT',
        };

        this.commonService.registerUser(this.userModel).subscribe(
          (response) => {
            if (response.status == 200) {
              this.showToastMessage('Success!', ['Successfully Registered Client.'], 'White', '#21db21', 'bi bi-check-circle-fill');
              this.onClear();
            }
          },
          (error) => {
            if (error.error.status == 1010) {
              this.showToastMessage('Warning!', ['Email Already Exist.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
            } else {
              this.showToastMessage('Warning!', ['Internal Server Error.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
            }
            console.error('Error of registering client : ', error);
          }
        );
      } else {
        this.showToastMessage('Warning!', ['Invalid Inputs, Check Again.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
        console.log('Invalid Inputs, Check Again.');
      }
    } else {
      this.businessRegistrationFormValidation();

      if (Object.keys(this.businessRegistrationFormError).length === 0) {
        this.userModel = {
          name: this.businessName,
          firstName: '',
          lastName: '',
          email: this.businessEmail,
          phoneNumber: this.businessPhoneNumber,
          dateOfBirth: this.dateOfBirth,
          homeAddress: this.homeAddress,
          password: this.businessPassword,
          role: 'BUSINESS',
        };

        this.commonService.registerUser(this.userModel).subscribe(
          (response) => {
            if (response.status == 200) {
              this.showToastMessage('Success!', ['Successfully Registered Business.'], 'White', '#21db21', 'bi bi-check-circle-fill');
              this.onClear();
            }
          },
          (error) => {
            if (error.error.status == 1010) {
              this.showToastMessage('Warning!', ['Email Already Exist.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
            } else {
              this.showToastMessage('Warning!', ['Internal Server Error.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
            }
            console.error('Error of registering business : ', error);
          }
        );
      } else {
        this.showToastMessage('Warning!', ['Invalid Inputs, Check Again.'], 'White', '#FCC200', 'bi bi-exclamation-triangle-fill');
        console.log('Invalid Inputs, Check Again.');
      }
    }
  }

  onClear() {
    this.dateOfBirth = '';
    this.homeAddress = '';

    //client
    this.firstName = '';
    this.lastName = '';
    this.clientEmail = '';
    this.clientPhoneNumber = '';
    this.clientPassword = '';
    this.clientConfirmPassword = '';

    //Business
    this.businessName = '';
    this.businessEmail = '';
    this.businessPhoneNumber = '';
    this.businessPassword = '';
    this.businessConfirmPassword = '';

    this.userModel = {
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      homeAddress: '',
      password: '',
      role: '',
    };

    this.clientRegistrationFormError = {};
    this.businessRegistrationFormError = {};
  }

  showToastMessage( header: string, body: string[], color: string, backgroundColor: string, icon: string) {
    this.toastService.show(header, body, color, backgroundColor, icon);
  }
}
