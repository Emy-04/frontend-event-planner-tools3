import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ أضفناها
import { CommonModule } from '@angular/common';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule,CommonModule) // ✅ علشان formGroup يشتغل
  ]
};
