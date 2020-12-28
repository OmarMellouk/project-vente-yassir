import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinvComponent } from './stockinv.component';

describe('StockinvComponent', () => {
  let component: StockinvComponent;
  let fixture: ComponentFixture<StockinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockinvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
