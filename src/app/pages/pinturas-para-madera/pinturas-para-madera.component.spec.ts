import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturasParaMaderaComponent } from './pinturas-para-madera.component';

describe('PinturasParaMaderaComponent', () => {
  let component: PinturasParaMaderaComponent;
  let fixture: ComponentFixture<PinturasParaMaderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturasParaMaderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturasParaMaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
