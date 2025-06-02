import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-waterproof',
  imports: [RouterLink],
  templateUrl: './waterproof.component.html',
  styleUrl: './waterproof.component.scss'
})
export class WaterproofComponent {
  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
