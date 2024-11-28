import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sigup',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.css'
})
export class SigupComponent {
  signupModel = { name: '', email: '', password: '' };

  constructor(private router: Router) {}

  onSignupSubmit() {
    const user = {
      name: this.signupModel.name,
      email: this.signupModel.email,
      password: this.signupModel.password,
    };
    
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    
    alert('Sign up successful! You can now login.');
    this.router.navigate(['/login']);  // Redirect to login page
  }
}

