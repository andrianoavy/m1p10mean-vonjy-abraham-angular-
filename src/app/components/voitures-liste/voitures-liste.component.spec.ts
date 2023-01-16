import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituresListeComponent } from './voitures-liste.component';

describe('VoituresListeComponent', () => {
  let component: VoituresListeComponent;
  let fixture: ComponentFixture<VoituresListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoituresListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoituresListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
