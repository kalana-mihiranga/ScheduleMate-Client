import { Routes } from '@angular/router';
import { LandingPageComponent } from './module/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
