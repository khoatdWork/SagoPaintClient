import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
// Import mock product data
import { mockProducts } from '../../data/product-data';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  product: any = null; // Variable to hold product data
  relatedProducts: any[] = []; // Array to hold related products

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.getProductDetail(this.productId);
      this.getRelatedProducts();
    });
  }

  getProductDetail(id: string | null): void {
    if (id) {
      this.product = mockProducts.find(p => p.id === id);
       // In a real application, you would fetch data from an API here
    } else {
        this.product = null; // Handle case where no product ID is provided
    }
  }

  getRelatedProducts(): void {
    // Lấy tất cả sản phẩm nội thất, loại bỏ sản phẩm hiện tại
    this.relatedProducts = mockProducts.filter(p => p.id !== this.productId);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
