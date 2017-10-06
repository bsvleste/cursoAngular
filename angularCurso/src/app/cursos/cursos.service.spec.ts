import { TestBed, inject } from '@angular/core/testing';

import { CursosService } from './cursos.service';

describe('CursoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosService]
    });
  });

  it('should be created', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));
});
