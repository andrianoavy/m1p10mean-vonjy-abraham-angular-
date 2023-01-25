import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsVoitureComponent } from './page-details-voiture.component';

describe('PageDetailsVoitureComponent', () => {
  let component: PageDetailsVoitureComponent;
  let fixture: ComponentFixture<PageDetailsVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetailsVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetailsVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
