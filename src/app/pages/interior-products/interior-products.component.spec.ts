import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorProductsComponent } from './interior-products.component';

describe('InteriorProductsComponent', () => {
  let component: InteriorProductsComponent;
  let fixture: ComponentFixture<InteriorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteriorProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
