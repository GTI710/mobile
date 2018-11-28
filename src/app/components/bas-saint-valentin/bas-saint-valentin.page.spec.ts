import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasSaintValentinPage } from './bas-saint-valentin.page';

describe('BasSaintValentinPage', () => {
  let component: BasSaintValentinPage;
  let fixture: ComponentFixture<BasSaintValentinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasSaintValentinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasSaintValentinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
