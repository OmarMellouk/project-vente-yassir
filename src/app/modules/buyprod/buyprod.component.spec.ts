import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyprodComponent } from './buyprod.component';

describe('BuyprodComponent', () => {
  let component: BuyprodComponent;
  let fixture: ComponentFixture<BuyprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
