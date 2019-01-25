import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmnLayoutComponent } from './rmn-layout.component';

describe('RmnLayoutComponent', () => {
  let component: RmnLayoutComponent;
  let fixture: ComponentFixture<RmnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
