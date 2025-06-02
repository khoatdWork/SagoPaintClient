import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorInspirationComponent } from './color-inspiration.component';

describe('ColorInspirationComponent', () => {
  let component: ColorInspirationComponent;
  let fixture: ComponentFixture<ColorInspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorInspirationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
