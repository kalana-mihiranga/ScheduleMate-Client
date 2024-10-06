import { Routes } from '@angular/router';
import { LandingComponent } from './common/page/landing/landing.component';

export const routes: Routes = [
    { path: 'home', component: LandingComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
