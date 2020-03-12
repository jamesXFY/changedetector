import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectorConsoleComponent } from './detector-console.component';

describe('DetectorConsoleComponent', () => {
  let component: DetectorConsoleComponent;
  let fixture: ComponentFixture<DetectorConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectorConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectorConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
