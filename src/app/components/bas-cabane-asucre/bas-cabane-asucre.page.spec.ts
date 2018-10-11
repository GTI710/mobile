import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasCabaneASucrePage } from './bas-cabane-asucre.page';

describe('BasCabaneASucrePage', () => {
  let component: BasCabaneASucrePage;
  let fixture: ComponentFixture<BasCabaneASucrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasCabaneASucrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasCabaneASucrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
