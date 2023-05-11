import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInpComponent } from './form-inp.component';

describe('FormInpComponent', () => {
  let component: FormInpComponent;
  let fixture: ComponentFixture<FormInpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
