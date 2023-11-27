import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleredirectionComponent } from './googleredirection.component';

describe('GoogleredirectionComponent', () => {
  let component: GoogleredirectionComponent;
  let fixture: ComponentFixture<GoogleredirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleredirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleredirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
