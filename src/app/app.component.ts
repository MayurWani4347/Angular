import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
// import { Router } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skills-india';

  isHomePage: boolean = false;
  // isAboutOrContactPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
   
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) 
    ).subscribe((event) => {
     
      this.isHomePage = this.router.url === '/',
       window.scrollTo(0, 0); 
      // this.isAboutOrContactPage = this.router.url === '/about' || this.router.url === '/contact';
    });


}
}