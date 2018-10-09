import { TestBed, inject } from '@angular/core/testing';

import { ProduitsService } from './produits.service';

describe('ProduitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitsService]
    });
  });

  it('should be created', inject([ProduitsService], (service: ProduitsService) => {
    expect(service).toBeTruthy();
  }));
});
