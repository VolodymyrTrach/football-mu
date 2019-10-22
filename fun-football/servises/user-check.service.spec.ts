import { TestBed } from '@angular/core/testing';

import { UserCheckService } from './user-check.service';

describe('UserCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCheckService = TestBed.get(UserCheckService);
    expect(service).toBeTruthy();
  });
});
