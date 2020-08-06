import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoImpermeabilizanteComponent } from './catalogo-impermeabilizante.component';

describe('CatalogoImpermeabilizanteComponent', () => {
  let component: CatalogoImpermeabilizanteComponent;
  let fixture: ComponentFixture<CatalogoImpermeabilizanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoImpermeabilizanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoImpermeabilizanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
