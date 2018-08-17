import { TestBed, async, inject } from '@angular/core/testing';

import { ProducCreateGuard } from './produc-create.guard';

describe('ProducCreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducCreateGuard]
    });
  });

  it('should ...', inject([ProducCreateGuard], (guard: ProducCreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
