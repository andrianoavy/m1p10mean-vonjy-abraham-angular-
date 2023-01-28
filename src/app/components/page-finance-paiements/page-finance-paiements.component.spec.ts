import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinancePaiementsComponent } from './page-finance-paiements.component';

describe('PageFinancePaiementsComponent', () => {
  let component: PageFinancePaiementsComponent;
  let fixture: ComponentFixture<PageFinancePaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFinancePaiementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFinancePaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
