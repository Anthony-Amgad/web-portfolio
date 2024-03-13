import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencepageComponent } from './experiencepage.component';

describe('ExperiencepageComponent', () => {
  let component: ExperiencepageComponent;
  let fixture: ComponentFixture<ExperiencepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencepageComponent]
    });
    fixture = TestBed.createComponent(ExperiencepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
