import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitersheaderComponent } from './monitersheader.component';

describe('MonitersheaderComponent', () => {
  let component: MonitersheaderComponent;
  let fixture: ComponentFixture<MonitersheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitersheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitersheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
