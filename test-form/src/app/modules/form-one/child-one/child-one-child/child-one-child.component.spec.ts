import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneChildComponent } from './child-one-child.component';

describe('ChildOneChildComponent', () => {
  let component: ChildOneChildComponent;
  let fixture: ComponentFixture<ChildOneChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOneChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
