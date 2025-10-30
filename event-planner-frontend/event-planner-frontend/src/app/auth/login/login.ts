import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;
  errorMsg = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMsg = '';
    const { email, password } = this.loginForm.value;

    this.http.post('http://127.0.0.1:5000/login', { email, password }).subscribe({
      next: (res: any) => {
        alert('Login successful!');
        this.loginForm.reset();
      },
      error: (err) => {
        this.errorMsg = 'Invalid email or password.';
      }
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
