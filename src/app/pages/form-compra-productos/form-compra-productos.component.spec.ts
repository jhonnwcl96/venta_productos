import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompraProductosComponent } from './form-compra-productos.component';

describe('FormCompraProductosComponent', () => {
  let component: FormCompraProductosComponent;
  let fixture: ComponentFixture<FormCompraProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompraProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompraProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
