import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaasLayoutComponent } from './waas-layout.component';

describe('WaasLayoutComponent', () => {
  let component: WaasLayoutComponent;
  let fixture: ComponentFixture<WaasLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaasLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
