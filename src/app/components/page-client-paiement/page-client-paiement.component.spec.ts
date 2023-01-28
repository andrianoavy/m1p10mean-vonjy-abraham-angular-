import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientPaiementComponent } from './page-client-paiement.component';

describe('PageClientPaiementComponent', () => {
  let component: PageClientPaiementComponent;
  let fixture: ComponentFixture<PageClientPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientPaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageClientPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
