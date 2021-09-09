import { TestBed } from '@angular/core/testing';

import { PetsApiService } from './pets-api.service';

describe('PetsApiService', () => {
  let service: PetsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
