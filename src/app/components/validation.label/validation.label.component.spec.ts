import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationLabelComponent } from './validation.label.component';

describe('ValidationLabelComponent', () => {
  let component: ValidationLabelComponent;
  let fixture: ComponentFixture<ValidationLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
