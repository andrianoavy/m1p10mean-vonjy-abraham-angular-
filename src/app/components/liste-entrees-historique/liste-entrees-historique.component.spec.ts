import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEntreesHistoriqueComponent } from './liste-entrees-historique.component';

describe('ListeEntreesHistoriqueComponent', () => {
  let component: ListeEntreesHistoriqueComponent;
  let fixture: ComponentFixture<ListeEntreesHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEntreesHistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEntreesHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
