import { TestBed } from '@angular/core/testing';

import { UserSubjectService } from './user-subject.service';

describe('UserSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSubjectService = TestBed.get(UserSubjectService);
    expect(service).toBeTruthy();
  });
});
