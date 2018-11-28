import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasHalloweenPage } from './bas-halloween.page';

describe('BasHalloweenPage', () => {
  let component: BasHalloweenPage;
  let fixture: ComponentFixture<BasHalloweenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasHalloweenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasHalloweenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
