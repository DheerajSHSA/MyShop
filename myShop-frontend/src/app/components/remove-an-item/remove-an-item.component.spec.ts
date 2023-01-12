import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAnItemComponent } from './remove-an-item.component';

describe('RemoveAnItemComponent', () => {
  let component: RemoveAnItemComponent;
  let fixture: ComponentFixture<RemoveAnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAnItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveAnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
