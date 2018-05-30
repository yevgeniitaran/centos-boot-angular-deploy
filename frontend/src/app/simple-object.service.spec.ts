import { TestBed, inject } from '@angular/core/testing';

import { SimpleObjectService } from './simple-object.service';

describe('SimpleObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleObjectService]
    });
  });

  it('should be created', inject([SimpleObjectService], (service: SimpleObjectService) => {
    expect(service).toBeTruthy();
  }));
});
