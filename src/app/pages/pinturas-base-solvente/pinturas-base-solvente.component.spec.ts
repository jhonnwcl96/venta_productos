import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturasBaseSolventeComponent } from './pinturas-base-solvente.component';

describe('PinturasBaseSolventeComponent', () => {
  let component: PinturasBaseSolventeComponent;
  let fixture: ComponentFixture<PinturasBaseSolventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturasBaseSolventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturasBaseSolventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
