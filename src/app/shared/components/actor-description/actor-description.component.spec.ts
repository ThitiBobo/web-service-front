import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDescriptionComponent } from './actor-description.component';

describe('ActorDescriptionComponent', () => {
  let component: ActorDescriptionComponent;
  let fixture: ComponentFixture<ActorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
