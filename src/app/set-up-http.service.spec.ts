import { TestBed } from '@angular/core/testing';

import { SetUpHTTPService } from './set-up-http.service';

describe('SetUpHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetUpHTTPService = TestBed.get(SetUpHTTPService);
    expect(service).toBeTruthy();
  });
});
