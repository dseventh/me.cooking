import { TestBed } from '@angular/core/testing';

import { GudcookService } from './gudcook.service';

describe('GudcookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GudcookService = TestBed.get(GudcookService);
    expect(service).toBeTruthy();
  });
});
