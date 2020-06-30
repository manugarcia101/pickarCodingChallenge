import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInDirectComponent } from './change-in-direct.component';

describe('ChangeInDirectComponent', () => {
  let component: ChangeInDirectComponent;
  let fixture: ComponentFixture<ChangeInDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeInDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
