import { TestBed, inject } from '@angular/core/testing';

import { AdminPageActivateGuard } from './admin-page-activate.guard';

describe('AdminPageActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPageActivateGuard]
    });
  });

  it('should ...', inject([AdminPageActivateGuard], (guard: AdminPageActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
