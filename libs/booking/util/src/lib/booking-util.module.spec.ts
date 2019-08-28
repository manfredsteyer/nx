import { async, TestBed } from '@angular/core/testing';
import { BookingUtilModule } from './booking-util.module';

describe('BookingUtilModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingUtilModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingUtilModule).toBeDefined();
  });
});
