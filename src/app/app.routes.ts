import { Routes } from '@angular/router';
import { LandingComponent } from './common/page/landing/landing.component';
import { LoginComponent } from './common/page/login/login.component';

export const routes: Routes = [
    { path: 'home', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
