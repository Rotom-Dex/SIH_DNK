import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSellerComponent } from './hero-seller.component';

describe('HeroSellerComponent', () => {
  let component: HeroSellerComponent;
  let fixture: ComponentFixture<HeroSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
