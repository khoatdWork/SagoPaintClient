import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-color-inspiration',
  templateUrl: './color-inspiration.component.html',
  styleUrls: ['./color-inspiration.component.scss']
})
export class ColorInspirationComponent implements OnInit {

  constructor(private router: Router, private titleService: TitleService) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.titleService.setColorInspirationTitle();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
