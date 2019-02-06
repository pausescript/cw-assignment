import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdPageComponent } from './pd-page.component';

describe('PdPageComponent', () => {
  let component: PdPageComponent;
  let fixture: ComponentFixture<PdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
