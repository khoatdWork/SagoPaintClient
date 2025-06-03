import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
// Import mock product data
import { mockProducts } from '../../data/product-data';
import { TitleService } from '../../services/title.service';
import { MetaService } from '../../services/meta.service';
import { Product, isContentObject, PreparationStep } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  product: Product | null = null;
  relatedProducts: Product[] = [];
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private metaService: MetaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProductDetail(this.productId);
      this.getRelatedProducts();
    });
  }

  getProductDetail(id: string | null): void {
    if (id) {
      this.product = mockProducts.find(p => p.id === id) as Product;
      if (this.product) {
        // Set title và meta tags cho sản phẩm
        this.titleService.setProductDetailTitle(this.product.name, this.product.description);
        this.metaService.setProductDetailMeta(this.product);
        this.error = null;
      } else {
        this.error = 'Không tìm thấy sản phẩm';
        this.product = null;
      }
    } else {
      this.error = 'Không tìm thấy ID sản phẩm';
      this.product = null;
    }
  }

  getRelatedProducts(): void {
    if (this.product) {
      // Lấy các sản phẩm cùng danh mục
      this.relatedProducts = mockProducts.filter(p =>
        p.category === this.product?.category && p.id !== this.productId
      ).slice(0, 4) as Product[]; // Giới hạn 4 sản phẩm liên quan
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isContentObject(content: string | { new: string; old: string }): boolean {
    return isContentObject(content);
  }

  getStepContent(step: PreparationStep): string {
    if (typeof step.content === 'object' && step.content !== null && 'new' in step.content) {
      return step.content.new;
    }
    return step.content as string;
  }
}
