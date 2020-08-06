import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturasBaseAguaComponent } from './pinturas-base-agua.component';

describe('PinturasBaseAguaComponent', () => {
  let component: PinturasBaseAguaComponent;
  let fixture: ComponentFixture<PinturasBaseAguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturasBaseAguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturasBaseAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
