import { async, TestBed } from '@angular/core/testing';
import { BookingFeatureUpdateModule } from './booking-feature-update.module';

describe('BookingFeatureUpdateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureUpdateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureUpdateModule).toBeDefined();
  });
});
