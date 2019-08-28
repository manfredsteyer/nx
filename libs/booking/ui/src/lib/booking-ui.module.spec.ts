import { async, TestBed } from '@angular/core/testing';
import { BookingUiModule } from './booking-ui.module';

describe('BookingUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingUiModule).toBeDefined();
  });
});
