import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueFinanceComponent } from './statistique-finance.component';

describe('StatistiqueFinanceComponent', () => {
  let component: StatistiqueFinanceComponent;
  let fixture: ComponentFixture<StatistiqueFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
