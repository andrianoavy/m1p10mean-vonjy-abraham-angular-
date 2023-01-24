import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRepationComponent } from './liste-repation.component';

describe('ListeRepationComponent', () => {
  let component: ListeRepationComponent;
  let fixture: ComponentFixture<ListeRepationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRepationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRepationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
