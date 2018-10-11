import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasUniformePage } from './bas-uniforme.page';

describe('BasUniformePage', () => {
  let component: BasUniformePage;
  let fixture: ComponentFixture<BasUniformePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasUniformePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasUniformePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
