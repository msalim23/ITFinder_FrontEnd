import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeursComponent } from './liste-demandeurs.component';

describe('ListeDemandeursComponent', () => {
  let component: ListeDemandeursComponent;
  let fixture: ComponentFixture<ListeDemandeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDemandeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
