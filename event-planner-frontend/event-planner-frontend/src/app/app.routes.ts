import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup';
import { LoginComponent } from './auth/login/login';
import { Landing } from './landing/landing';
export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
   { path: '', component: Landing },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // الصفحة الافتراضية login
  { path: '**', redirectTo: '/login' } // أي route مش موجود يرجع login
];
