import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHighchartsComponent } from './custom-highcharts.component';

describe('CustomHighchartsComponent', () => {
  let component: CustomHighchartsComponent;
  let fixture: ComponentFixture<CustomHighchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHighchartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
