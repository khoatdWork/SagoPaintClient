import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-interior',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './interior.component.html',
  styleUrl: './interior.component.scss'
})
export class InteriorComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
