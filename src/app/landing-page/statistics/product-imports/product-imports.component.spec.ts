import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImportsComponent } from './product-imports.component';

describe('ProductImportsComponent', () => {
  let component: ProductImportsComponent;
  let fixture: ComponentFixture<ProductImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductImportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
