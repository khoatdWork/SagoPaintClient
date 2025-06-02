import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterproofComponent } from './waterproof.component';

describe('WaterproofComponent', () => {
  let component: WaterproofComponent;
  let fixture: ComponentFixture<WaterproofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterproofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterproofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
