import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturasAnticorrosivasComponent } from './pinturas-anticorrosivas.component';

describe('PinturasAnticorrosivasComponent', () => {
  let component: PinturasAnticorrosivasComponent;
  let fixture: ComponentFixture<PinturasAnticorrosivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturasAnticorrosivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturasAnticorrosivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
