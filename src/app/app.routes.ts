import { Routes } from '@angular/router';
import { LandingComponent } from './page/common/landing/landing.component';
import { LoginComponent } from './page/common/login/login.component';
import { RegisterComponent } from './page/common/register/register.component';
import { BusinessLandingComponent } from './page/business/business-landing/business-landing.component';
import { BusinessPackageComponent } from './page/business/business-package/business-package.component';
import { BusinessTourComponent } from './page/business/business-tour/business-tour.component';
import { ClientLandingComponent } from './page/client/client-landing/client-landing.component';
import { ServiceViewComponent } from './page/client/service-view/service-view.component';
import { BusinessServiceComponent } from './page/business/business-service/business-service.component';
import { AuthGuard } from './shared/auth.guard';
import { NotAuthorizedComponent } from './page/common/not-authorized/not-authorized.component';

export const routes: Routes = [
    { path: 'businessLanding', component: BusinessLandingComponent, canActivate: [AuthGuard], data: { roles: ["BUSINESS"] } },
    { path: 'businessPackage', component: BusinessPackageComponent },
    { path: 'businessTour', component: BusinessTourComponent },
    { path: 'businessService', component: BusinessServiceComponent },
    { path: 'clientLanding', component: ClientLandingComponent },
    { path: 'serviceView', component: ServiceViewComponent },
    { path: 'clientHome', component: LandingComponent, canActivate: [AuthGuard], data: { roles: ["CLIENT"] } },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'notAuth', component: NotAuthorizedComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
