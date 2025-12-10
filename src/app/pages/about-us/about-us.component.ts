import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  constructor(
    private titleService: TitleService,
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Về chúng tôi');
    this.metaService.updateMetaTags({
      title: 'Về chúng tôi',
      description: 'Tìm hiểu về Sago Paint và câu chuyện của chúng tôi',
      keywords: 'về chúng tôi, sago paint, giới thiệu, thông tin công ty'
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

