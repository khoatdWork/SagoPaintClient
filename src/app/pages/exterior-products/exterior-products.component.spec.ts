import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorProductsComponent } from './exterior-products.component';

describe('ExteriorProductsComponent', () => {
  let component: ExteriorProductsComponent;
  let fixture: ComponentFixture<ExteriorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExteriorProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExteriorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
