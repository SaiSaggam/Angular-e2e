import { TestBed, inject } from '@angular/core/testing';

import { DataNinjaService } from './data-ninja.service';

describe('DataNinjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataNinjaService]
    });
  });

  it('should be created', inject([DataNinjaService], (service: DataNinjaService) => {
    expect(service).toBeTruthy();
  }));
});
