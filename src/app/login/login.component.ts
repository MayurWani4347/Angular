import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel = { email: '', password: '' };

  constructor(private router: Router) {}

  onLoginSubmit() {
   
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (this.loginModel.email === storedUser.email && this.loginModel.password === storedUser.password) {
      alert('Login successful!');
      this.router.navigate(['/']);  
    } else {
      alert('Invalid credentials');
    }


  }
}
