import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateofdiffusionComponent } from './rateofdiffusion.component';

describe('RateofdiffusionComponent', () => {
  let component: RateofdiffusionComponent;
  let fixture: ComponentFixture<RateofdiffusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateofdiffusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateofdiffusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
