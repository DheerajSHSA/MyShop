import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagBackInStockComponent } from './flag-back-in-stock.component';

describe('FlagBackInStockComponent', () => {
  let component: FlagBackInStockComponent;
  let fixture: ComponentFixture<FlagBackInStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagBackInStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagBackInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
