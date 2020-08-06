import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturasAutomotivasComponent } from './pinturas-automotivas.component';

describe('PinturasAutomotivasComponent', () => {
  let component: PinturasAutomotivasComponent;
  let fixture: ComponentFixture<PinturasAutomotivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturasAutomotivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturasAutomotivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
