import { TestBed, inject } from '@angular/core/testing';

import { DemandeurService } from './demandeur.service';

describe('DemandeurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandeurService]
    });
  });

  it('should be created', inject([DemandeurService], (service: DemandeurService) => {
    expect(service).toBeTruthy();
  }));
});
