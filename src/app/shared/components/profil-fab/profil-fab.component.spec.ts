import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilFabComponent } from './profil-fab.component';

describe('ProfilFabComponent', () => {
  let component: ProfilFabComponent;
  let fixture: ComponentFixture<ProfilFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
