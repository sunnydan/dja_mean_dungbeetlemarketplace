import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungbeetleComponent } from './dungbeetle.component';

describe('DungbeetleComponent', () => {
  let component: DungbeetleComponent;
  let fixture: ComponentFixture<DungbeetleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungbeetleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungbeetleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
