import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterproofProductsComponent } from './waterproof-products.component';

describe('WaterproofProductsComponent', () => {
  let component: WaterproofProductsComponent;
  let fixture: ComponentFixture<WaterproofProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterproofProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterproofProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
