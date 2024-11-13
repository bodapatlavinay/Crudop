import { TestBed } from '@angular/core/testing';

import { CrudOpService } from './crud-op.service';

describe('CrudOpService', () => {
  let service: CrudOpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudOpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
