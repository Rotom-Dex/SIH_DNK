import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuyerComponent } from './hero-buyer.component';

describe('HeroBuyerComponent', () => {
  let component: HeroBuyerComponent;
  let fixture: ComponentFixture<HeroBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
