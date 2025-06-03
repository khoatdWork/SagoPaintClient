import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private readonly BRAND_NAME = '| Sơn Sago';

  constructor(private titleService: Title) {}

  setTitle(title: string) {
    this.titleService.setTitle(`${title} ${this.BRAND_NAME}`);
  }

  // Title cho trang chủ
  setHomeTitle() {
    this.setTitle('Sơn Sago - Hãng sơn cao cấp hàng đầu Việt Nam');
  }

  // Title cho các trang danh mục
  setInteriorTitle() {
    this.setTitle('Sơn nội thất Sago - Giải pháp sơn nội thất cao cấp');
  }

  setExteriorTitle() {
    this.setTitle('Sơn ngoại thất Sago - Bảo vệ công trình bền đẹp');
  }

  setWaterproofTitle() {
    this.setTitle('Sơn chống thấm Sago - Giải pháp chống thấm hiệu quả');
  }

  // Title cho các trang sản phẩm
  setInteriorProductsTitle() {
    this.setTitle('Sản phẩm sơn nội thất Sago - Đa dạng mẫu mã, chất lượng cao');
  }

  setExteriorProductsTitle() {
    this.setTitle('Sản phẩm sơn ngoại thất Sago - Bảo vệ công trình tối ưu');
  }

  setWaterproofProductsTitle() {
    this.setTitle('Sản phẩm sơn chống thấm Sago - Giải pháp toàn diện');
  }

  // Title cho trang chi tiết sản phẩm
  setProductDetailTitle(productName: string, description: string) {
    this.setTitle(`${productName} - ${description}`);
  }

  // Title cho các trang thông tin
  setColorMeaningTitle() {
    this.setTitle('Ý nghĩa màu sắc trong thiết kế nội thất');
  }

  setColorInspirationTitle() {
    this.setTitle('Cảm hứng màu sắc cho không gian sống');
  }
}
