import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawTrailComponent } from './paw-trail.component';

describe('PawTrailComponent', () => {
  let component: PawTrailComponent;
  let fixture: ComponentFixture<PawTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawTrailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
