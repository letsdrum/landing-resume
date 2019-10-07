import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIDoingComponent } from './what-i-doing.component';

describe('WhatIDoingComponent', () => {
  let component: WhatIDoingComponent;
  let fixture: ComponentFixture<WhatIDoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIDoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
