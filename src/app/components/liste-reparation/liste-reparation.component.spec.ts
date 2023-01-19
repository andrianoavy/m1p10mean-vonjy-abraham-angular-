import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReparationComponent } from './liste-reparation.component';

describe('ListeReparationComponent', () => {
  let component: ListeReparationComponent;
  let fixture: ComponentFixture<ListeReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
