import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCounterComponent } from './inventory-counter.component';

describe('InventoryCounterComponent', () => {
  let component: InventoryCounterComponent;
  let fixture: ComponentFixture<InventoryCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
