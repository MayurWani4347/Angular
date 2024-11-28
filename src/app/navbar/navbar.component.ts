import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactusComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeLink: string = '';

  setActive(link: string): void {
    this.activeLink = link;
  }
}
