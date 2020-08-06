import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoMaderaComponent } from './catalogo-madera.component';

describe('CatalogoMaderaComponent', () => {
  let component: CatalogoMaderaComponent;
  let fixture: ComponentFixture<CatalogoMaderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoMaderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoMaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
