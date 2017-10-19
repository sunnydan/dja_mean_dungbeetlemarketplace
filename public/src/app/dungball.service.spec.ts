import { TestBed, inject } from '@angular/core/testing';

import { DungballService } from './dungball.service';

describe('DungballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DungballService]
    });
  });

  it('should be created', inject([DungballService], (service: DungballService) => {
    expect(service).toBeTruthy();
  }));
});
