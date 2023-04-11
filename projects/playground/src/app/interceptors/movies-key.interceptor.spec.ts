import { TestBed } from '@angular/core/testing';

import { MoviesKeyInterceptor } from './movies-key.interceptor';

describe('MoviesKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MoviesKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MoviesKeyInterceptor = TestBed.inject(MoviesKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
