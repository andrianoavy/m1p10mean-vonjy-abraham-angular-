import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFacturesComponent } from './page-factures.component';

describe('PageFacturesComponent', () => {
  let component: PageFacturesComponent;
  let fixture: ComponentFixture<PageFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFacturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
