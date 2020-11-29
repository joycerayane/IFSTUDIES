import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcseletivoComponent } from './procseletivo.component';

describe('ProcseletivoComponent', () => {
  let component: ProcseletivoComponent;
  let fixture: ComponentFixture<ProcseletivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcseletivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcseletivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
