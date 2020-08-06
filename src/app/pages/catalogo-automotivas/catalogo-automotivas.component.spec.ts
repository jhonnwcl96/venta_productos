import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAutomotivasComponent } from './catalogo-automotivas.component';

describe('CatalogoAutomotivasComponent', () => {
  let component: CatalogoAutomotivasComponent;
  let fixture: ComponentFixture<CatalogoAutomotivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoAutomotivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoAutomotivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
