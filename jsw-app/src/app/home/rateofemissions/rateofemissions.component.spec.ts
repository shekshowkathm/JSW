import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateofemissionsComponent } from './rateofemissions.component';

describe('RateofemissionsComponent', () => {
  let component: RateofemissionsComponent;
  let fixture: ComponentFixture<RateofemissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateofemissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateofemissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
