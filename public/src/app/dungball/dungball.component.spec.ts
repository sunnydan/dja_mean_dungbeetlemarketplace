import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungballComponent } from './dungball.component';

describe('DungballComponent', () => {
  let component: DungballComponent;
  let fixture: ComponentFixture<DungballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
