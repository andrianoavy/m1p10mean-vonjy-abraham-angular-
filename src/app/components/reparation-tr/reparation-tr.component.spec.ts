import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationTrComponent } from './reparation-tr.component';

describe('ReparationTrComponent', () => {
  let component: ReparationTrComponent;
  let fixture: ComponentFixture<ReparationTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationTrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
