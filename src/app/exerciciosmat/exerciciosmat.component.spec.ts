import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosmatComponent } from './exerciciosmat.component';

describe('ExerciciosmatComponent', () => {
  let component: ExerciciosmatComponent;
  let fixture: ComponentFixture<ExerciciosmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciciosmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
