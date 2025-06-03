import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-interior-products',
  imports: [RouterLink],
  templateUrl: './interior-products.component.html',
  styleUrl: './interior-products.component.scss'
})
export class InteriorProductsComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setInteriorProductsTitle();
  }
}
