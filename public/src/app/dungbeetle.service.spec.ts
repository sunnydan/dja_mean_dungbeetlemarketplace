import { TestBed, inject } from '@angular/core/testing';

import { DungbeetleService } from './dungbeetle.service';

describe('DungbeetleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DungbeetleService]
    });
  });

  it('should be created', inject([DungbeetleService], (service: DungbeetleService) => {
    expect(service).toBeTruthy();
  }));
});
