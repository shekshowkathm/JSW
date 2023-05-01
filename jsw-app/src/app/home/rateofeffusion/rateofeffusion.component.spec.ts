import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateofeffusionComponent } from './rateofeffusion.component';

describe('RateofeffusionComponent', () => {
  let component: RateofeffusionComponent;
  let fixture: ComponentFixture<RateofeffusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateofeffusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateofeffusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
