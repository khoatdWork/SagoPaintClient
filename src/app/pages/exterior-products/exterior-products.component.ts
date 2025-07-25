import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { RouterLink } from '@angular/router';
import { mockProducts } from '../../data/product-data';

@Component({
  selector: 'app-exterior-products',
  imports: [RouterLink],
  templateUrl: './exterior-products.component.html',
  styleUrl: './exterior-products.component.scss'
})
export class ExteriorProductsComponent implements OnInit {
  products = mockProducts.filter(p => p.category === 'exterior');

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setExteriorProductsTitle();
  }
}
