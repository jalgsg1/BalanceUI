import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMaterialComponent } from './navbar-material.component';

describe('NavbarMaterialComponent', () => {
  let component: NavbarMaterialComponent;
  let fixture: ComponentFixture<NavbarMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMaterialComponent]
    });
    fixture = TestBed.createComponent(NavbarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
