import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHighchartsTableComponent } from './custom-highcharts-table.component';

describe('CustomHighchartsTableComponent', () => {
  let component: CustomHighchartsTableComponent;
  let fixture: ComponentFixture<CustomHighchartsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHighchartsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomHighchartsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
