import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculBeneficeComponent } from './calcul-benefice.component';

describe('CalculBeneficeComponent', () => {
  let component: CalculBeneficeComponent;
  let fixture: ComponentFixture<CalculBeneficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculBeneficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculBeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
