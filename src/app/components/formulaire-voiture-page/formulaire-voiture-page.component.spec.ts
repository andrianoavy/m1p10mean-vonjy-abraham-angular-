import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireVoiturePageComponent } from './formulaire-voiture-page.component';

describe('FormulaireVoiturePageComponent', () => {
  let component: FormulaireVoiturePageComponent;
  let fixture: ComponentFixture<FormulaireVoiturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireVoiturePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireVoiturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
