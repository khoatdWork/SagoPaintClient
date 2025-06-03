import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-interior',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './interior.component.html',
  styleUrl: './interior.component.scss'
})
export class InteriorComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setInteriorTitle();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
