import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturasImpermeabilizantesComponent } from './pinturas-impermeabilizantes.component';

describe('PinturasImpermeabilizantesComponent', () => {
  let component: PinturasImpermeabilizantesComponent;
  let fixture: ComponentFixture<PinturasImpermeabilizantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturasImpermeabilizantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturasImpermeabilizantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
