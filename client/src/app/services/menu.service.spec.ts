import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  it("should load level 1", () => {
    const service: MenuService = TestBed.get(MenuService);
    const level1 = service.loadMenu();
    expect(level1.length).toBe(5);
    expect(level1[0].children.length).toBe(0);
  });
});
