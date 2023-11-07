import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecontainerComponent } from './servicecontainer.component';

describe('ServicecontainerComponent', () => {
  let component: ServicecontainerComponent;
  let fixture: ComponentFixture<ServicecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
