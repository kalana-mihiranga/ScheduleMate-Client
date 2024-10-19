import { Routes } from '@angular/router';
import { LandingComponent } from './page/common/landing/landing.component';
import { LoginComponent } from './page/common/login/login.component';
import { RegisterComponent } from './page/common/register/register.component';
import { BusinessLandingComponent } from './page/business/business-landing/business-landing.component';
import { BusinessPackageComponent } from './page/business/business-package/business-package.component';
import { BusinessTourComponent } from './page/business/business-tour/business-tour.component';
import { BusinessPackageAddComponent } from './page/business/business-package-add/business-package-add.component';

export const routes: Routes = [
    { path: 'businessLanding', component: BusinessLandingComponent },
    { path: 'businessPackage', component: BusinessPackageComponent },
    { path: 'businessPackageAdd', component: BusinessPackageAddComponent },
    { path: 'businessTour', component: BusinessTourComponent },
    { path: 'home', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
