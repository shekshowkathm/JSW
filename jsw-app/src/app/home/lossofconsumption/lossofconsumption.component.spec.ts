import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossofconsumptionComponent } from './lossofconsumption.component';

describe('LossofconsumptionComponent', () => {
  let component: LossofconsumptionComponent;
  let fixture: ComponentFixture<LossofconsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LossofconsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LossofconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
