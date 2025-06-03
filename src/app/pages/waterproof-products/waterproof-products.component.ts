import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-waterproof-products',
  imports: [],
  templateUrl: './waterproof-products.component.html',
  styleUrl: './waterproof-products.component.scss'
})
export class WaterproofProductsComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setWaterproofProductsTitle();
  }
}
