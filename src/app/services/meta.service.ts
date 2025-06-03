import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private readonly BRAND_NAME = 'Sơn Sago';
  private readonly DEFAULT_DESCRIPTION = 'Sơn Sago - Hãng sơn cao cấp hàng đầu Việt Nam, chuyên cung cấp các giải pháp sơn nội thất, ngoại thất và chống thấm chất lượng cao.';
  private readonly DEFAULT_KEYWORDS = 'sơn sago, sơn nội thất, sơn ngoại thất, sơn chống thấm, sơn cao cấp, sơn việt nam';

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  updateMetaTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
  }) {
    // Set title
    if (config.title) {
      this.title.setTitle(`${config.title} | ${this.BRAND_NAME}`);
    }

    // Set meta description
    this.meta.updateTag({
      name: 'description',
      content: config.description || this.DEFAULT_DESCRIPTION
    });

    // Set meta keywords
    this.meta.updateTag({
      name: 'keywords',
      content: config.keywords || this.DEFAULT_KEYWORDS
    });

    // Set Open Graph tags
    this.meta.updateTag({
      property: 'og:title',
      content: config.ogTitle || config.title || this.BRAND_NAME
    });

    this.meta.updateTag({
      property: 'og:description',
      content: config.ogDescription || config.description || this.DEFAULT_DESCRIPTION
    });

    if (config.ogImage) {
      this.meta.updateTag({
        property: 'og:image',
        content: config.ogImage
      });
    }

    if (config.ogUrl) {
      this.meta.updateTag({
        property: 'og:url',
        content: config.ogUrl
      });
    }

    // Set Twitter Card tags
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: config.ogTitle || config.title || this.BRAND_NAME
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: config.ogDescription || config.description || this.DEFAULT_DESCRIPTION
    });

    if (config.ogImage) {
      this.meta.updateTag({
        name: 'twitter:image',
        content: config.ogImage
      });
    }
  }

  // Các phương thức cụ thể cho từng loại trang
  setHomeMeta() {
    this.updateMetaTags({
      title: 'Sơn Sago - Hãng sơn cao cấp hàng đầu Việt Nam',
      description: 'Sơn Sago - Thương hiệu sơn cao cấp hàng đầu Việt Nam, chuyên cung cấp các giải pháp sơn nội thất, ngoại thất và chống thấm chất lượng cao.',
      keywords: 'sơn sago, sơn cao cấp, sơn nội thất, sơn ngoại thất, sơn chống thấm, sơn việt nam',
      ogTitle: 'Sơn Sago - Hãng sơn cao cấp hàng đầu Việt Nam',
      ogDescription: 'Sơn Sago - Thương hiệu sơn cao cấp hàng đầu Việt Nam, chuyên cung cấp các giải pháp sơn nội thất, ngoại thất và chống thấm chất lượng cao.'
    });
  }

  setInteriorMeta() {
    this.updateMetaTags({
      title: 'Sơn nội thất Sago - Giải pháp sơn nội thất cao cấp',
      description: 'Sơn nội thất Sago - Giải pháp sơn nội thất cao cấp, đa dạng màu sắc, độ bền cao, an toàn cho sức khỏe.',
      keywords: 'sơn nội thất, sơn nội thất cao cấp, sơn sago nội thất, sơn nhà, sơn tường',
      ogTitle: 'Sơn nội thất Sago - Giải pháp sơn nội thất cao cấp',
      ogDescription: 'Sơn nội thất Sago - Giải pháp sơn nội thất cao cấp, đa dạng màu sắc, độ bền cao, an toàn cho sức khỏe.'
    });
  }

  setExteriorMeta() {
    this.updateMetaTags({
      title: 'Sơn ngoại thất Sago - Bảo vệ công trình bền đẹp',
      description: 'Sơn ngoại thất Sago - Giải pháp sơn ngoại thất chuyên nghiệp, chống nắng, chống thấm, độ bền cao.',
      keywords: 'sơn ngoại thất, sơn ngoại thất cao cấp, sơn sago ngoại thất, sơn tường ngoài trời',
      ogTitle: 'Sơn ngoại thất Sago - Bảo vệ công trình bền đẹp',
      ogDescription: 'Sơn ngoại thất Sago - Giải pháp sơn ngoại thất chuyên nghiệp, chống nắng, chống thấm, độ bền cao.'
    });
  }

  setWaterproofMeta() {
    this.updateMetaTags({
      title: 'Sơn chống thấm Sago - Giải pháp chống thấm hiệu quả',
      description: 'Sơn chống thấm Sago - Giải pháp chống thấm toàn diện, hiệu quả cao, độ bền lâu dài.',
      keywords: 'sơn chống thấm, sơn chống thấm cao cấp, sơn sago chống thấm, chống thấm tường',
      ogTitle: 'Sơn chống thấm Sago - Giải pháp chống thấm hiệu quả',
      ogDescription: 'Sơn chống thấm Sago - Giải pháp chống thấm toàn diện, hiệu quả cao, độ bền lâu dài.'
    });
  }

  setProductDetailMeta(product: any) {
    this.updateMetaTags({
      title: `${product.name} - ${product.shortDescription}`,
      description: product.description,
      keywords: `${product.name}, ${product.category}, sơn sago, sơn cao cấp`,
      ogTitle: `${product.name} - ${product.shortDescription}`,
      ogDescription: product.description,
      ogImage: product.image
    });
  }
}
