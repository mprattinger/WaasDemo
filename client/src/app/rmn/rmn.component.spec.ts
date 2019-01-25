import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmnComponent } from './rmn.component';

describe('RmnComponent', () => {
  let component: RmnComponent;
  let fixture: ComponentFixture<RmnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
