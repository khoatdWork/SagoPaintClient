import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMeaningComponent } from './color-meaning.component';

describe('ColorMeaningComponent', () => {
  let component: ColorMeaningComponent;
  let fixture: ComponentFixture<ColorMeaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorMeaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
