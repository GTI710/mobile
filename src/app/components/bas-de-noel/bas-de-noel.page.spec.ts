import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasDeNoelPage } from './bas-de-noel.page';

describe('BasDeNoelPage', () => {
  let component: BasDeNoelPage;
  let fixture: ComponentFixture<BasDeNoelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasDeNoelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasDeNoelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
