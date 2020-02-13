import { TestBed } from '@angular/core/testing';

import { Yaml2jsonService } from './yaml2json.service';

describe('Yaml2jsonService', () => {
  let service: Yaml2jsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Yaml2jsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
