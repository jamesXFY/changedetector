import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutLoadComponent } from './rout-load.component';

describe('RoutLoadComponent', () => {
  let component: RoutLoadComponent;
  let fixture: ComponentFixture<RoutLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
