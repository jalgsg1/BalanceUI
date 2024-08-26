import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMaterialComponent } from './footer-material.component';

describe('FooterMaterialComponent', () => {
  let component: FooterMaterialComponent;
  let fixture: ComponentFixture<FooterMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterMaterialComponent]
    });
    fixture = TestBed.createComponent(FooterMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
