import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRedirectComponent } from './form-redirect.component';

describe('FormRedirectComponent', () => {
  let component: FormRedirectComponent;
  let fixture: ComponentFixture<FormRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
