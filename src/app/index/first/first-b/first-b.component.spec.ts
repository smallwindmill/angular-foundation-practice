import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBComponent } from './first-b.component';

describe('FirstBComponent', () => {
  let component: FirstBComponent;
  let fixture: ComponentFixture<FirstBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
