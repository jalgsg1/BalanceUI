import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExportsComponent } from './product-exports.component';

describe('ProductExportsComponent', () => {
  let component: ProductExportsComponent;
  let fixture: ComponentFixture<ProductExportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductExportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
