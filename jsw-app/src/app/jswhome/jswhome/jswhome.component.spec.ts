import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JswhomeComponent } from './jswhome.component';

describe('JswhomeComponent', () => {
  let component: JswhomeComponent;
  let fixture: ComponentFixture<JswhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JswhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JswhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
