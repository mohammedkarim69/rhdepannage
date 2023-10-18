import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadbandBlackYellowComponent } from './headband-black-yellow.component';

describe('HeadbandBlackYellowComponent', () => {
  let component: HeadbandBlackYellowComponent;
  let fixture: ComponentFixture<HeadbandBlackYellowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadbandBlackYellowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadbandBlackYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
