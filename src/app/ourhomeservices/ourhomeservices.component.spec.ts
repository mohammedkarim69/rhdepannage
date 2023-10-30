import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurhomeservicesComponent } from './ourhomeservices.component';

describe('OurhomeservicesComponent', () => {
  let component: OurhomeservicesComponent;
  let fixture: ComponentFixture<OurhomeservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurhomeservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurhomeservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
