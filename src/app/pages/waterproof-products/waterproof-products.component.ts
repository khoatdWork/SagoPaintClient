import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { RouterLink } from '@angular/router';
import { mockProducts } from '../../data/product-data';

@Component({
  selector: 'app-waterproof-products',
  imports: [RouterLink],
  templateUrl: './waterproof-products.component.html',
  styleUrl: './waterproof-products.component.scss'
})
export class WaterproofProductsComponent implements OnInit {
  products = mockProducts.filter(p => p.category === 'waterproof');

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setWaterproofProductsTitle();
  }
}
