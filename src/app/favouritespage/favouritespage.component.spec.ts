import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritespageComponent } from './favouritespage.component';

describe('FavouritespageComponent', () => {
  let component: FavouritespageComponent;
  let fixture: ComponentFixture<FavouritespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritespageComponent]
    });
    fixture = TestBed.createComponent(FavouritespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
