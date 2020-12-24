import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caisse2Component } from './caisse2.component';

describe('Caisse2Component', () => {
  let component: Caisse2Component;
  let fixture: ComponentFixture<Caisse2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Caisse2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Caisse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
