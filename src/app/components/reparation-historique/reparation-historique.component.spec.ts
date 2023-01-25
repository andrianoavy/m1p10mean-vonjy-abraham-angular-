import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationHistoriqueComponent } from './reparation-historique.component';

describe('ReparationHistoriqueComponent', () => {
  let component: ReparationHistoriqueComponent;
  let fixture: ComponentFixture<ReparationHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationHistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
