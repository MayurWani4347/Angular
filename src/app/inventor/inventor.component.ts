import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-inventor',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './inventor.component.html',
  styleUrl: './inventor.component.css'
})
export class InventorComponent {

}
