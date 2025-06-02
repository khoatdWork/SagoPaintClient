import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-exterior',
  imports: [RouterLink],
  templateUrl: './exterior.component.html',
  styleUrl: './exterior.component.scss'
})
export class ExteriorComponent {
  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
