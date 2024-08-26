import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNavigationMenuComponent } from './stats-navigation-menu.component';

describe('StatsNavigationMenuComponent', () => {
  let component: StatsNavigationMenuComponent;
  let fixture: ComponentFixture<StatsNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsNavigationMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
