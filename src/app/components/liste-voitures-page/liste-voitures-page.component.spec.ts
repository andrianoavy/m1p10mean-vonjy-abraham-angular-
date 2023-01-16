import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVoituresPageComponent } from './liste-voitures-page.component';

describe('ListeVoituresPageComponent', () => {
  let component: ListeVoituresPageComponent;
  let fixture: ComponentFixture<ListeVoituresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVoituresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVoituresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
