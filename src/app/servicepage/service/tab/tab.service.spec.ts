import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit('Табулювання значення x=0.1 y=0.9983',()=>{
    let x=0.1;
    let y=0.9983;
    let xy= service.getTab();
    let y1=xy.get(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  });
});
