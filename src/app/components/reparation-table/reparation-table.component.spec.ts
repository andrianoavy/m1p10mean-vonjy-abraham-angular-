import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationTableComponent } from './reparation-table.component';

describe('ReparationTableComponent', () => {
  let component: ReparationTableComponent;
  let fixture: ComponentFixture<ReparationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
