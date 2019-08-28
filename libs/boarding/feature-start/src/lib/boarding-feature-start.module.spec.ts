import { async, TestBed } from '@angular/core/testing';
import { BoardingFeatureStartModule } from './boarding-feature-start.module';

describe('BoardingFeatureStartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BoardingFeatureStartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BoardingFeatureStartModule).toBeDefined();
  });
});
