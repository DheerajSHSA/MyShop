import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagOutOfStockComponent } from './flag-out-of-stock.component';

describe('FlagOutOfStockComponent', () => {
  let component: FlagOutOfStockComponent;
  let fixture: ComponentFixture<FlagOutOfStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagOutOfStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagOutOfStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
