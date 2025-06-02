import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-inspiration',
  templateUrl: './color-inspiration.component.html',
  styleUrls: ['./color-inspiration.component.scss']
})
export class ColorInspirationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
