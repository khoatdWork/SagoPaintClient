import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-exterior',
  imports: [RouterLink],
  templateUrl: './exterior.component.html',
  styleUrl: './exterior.component.scss'
})
export class ExteriorComponent implements OnInit {
  constructor(private router: Router, private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setExteriorTitle();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
