import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoChildComponent } from './child-two-child.component';

describe('ChildTwoChildComponent', () => {
  let component: ChildTwoChildComponent;
  let fixture: ComponentFixture<ChildTwoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTwoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
