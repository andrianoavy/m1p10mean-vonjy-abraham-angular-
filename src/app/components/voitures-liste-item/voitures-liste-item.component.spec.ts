import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituresListeItemComponent } from './voitures-liste-item.component';

describe('VoituresListeItemComponent', () => {
  let component: VoituresListeItemComponent;
  let fixture: ComponentFixture<VoituresListeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoituresListeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoituresListeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
