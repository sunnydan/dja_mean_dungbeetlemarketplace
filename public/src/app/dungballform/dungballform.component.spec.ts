import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungballformComponent } from './dungballform.component';

describe('DungballformComponent', () => {
  let component: DungballformComponent;
  let fixture: ComponentFixture<DungballformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungballformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungballformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
