import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAnticorrosivasComponent } from './catalogo-anticorrosivas.component';

describe('CatalogoAnticorrosivasComponent', () => {
  let component: CatalogoAnticorrosivasComponent;
  let fixture: ComponentFixture<CatalogoAnticorrosivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoAnticorrosivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoAnticorrosivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
