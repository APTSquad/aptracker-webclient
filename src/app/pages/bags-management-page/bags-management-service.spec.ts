import { TestBed } from '@angular/core/testing';

import { BagsManagementService } from './bags-management-service';

describe('UsersManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BagsManagementService = TestBed.get(BagsManagementService);
    expect(service).toBeTruthy();
  });
});
