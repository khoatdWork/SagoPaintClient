import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-exterior-products',
  imports: [],
  templateUrl: './exterior-products.component.html',
  styleUrl: './exterior-products.component.scss'
})
export class ExteriorProductsComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setExteriorProductsTitle();
  }
}
