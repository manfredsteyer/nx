import { async, TestBed } from '@angular/core/testing';
import { BookingFeatureCreateModule } from './booking-feature-create.module';

describe('BookingFeatureCreateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureCreateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureCreateModule).toBeDefined();
  });
});
