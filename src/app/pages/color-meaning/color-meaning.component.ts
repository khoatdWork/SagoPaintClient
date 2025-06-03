import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-color-meaning',
  templateUrl: './color-meaning.component.html',
  styleUrls: ['./color-meaning.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class ColorMeaningComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setColorMeaningTitle();
  }
}
