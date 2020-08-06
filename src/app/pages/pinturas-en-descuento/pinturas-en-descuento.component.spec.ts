import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturasEnDescuentoComponent } from './pinturas-en-descuento.component';

describe('PinturasEnDescuentoComponent', () => {
  let component: PinturasEnDescuentoComponent;
  let fixture: ComponentFixture<PinturasEnDescuentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturasEnDescuentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturasEnDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
