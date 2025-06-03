import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-waterproof',
  imports: [RouterLink],
  templateUrl: './waterproof.component.html',
  styleUrl: './waterproof.component.scss'
})
export class WaterproofComponent implements OnInit {
  constructor(private router: Router, private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setWaterproofTitle();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
