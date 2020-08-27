import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedacaoComponent } from './redacao.component';

describe('RedacaoComponent', () => {
  let component: RedacaoComponent;
  let fixture: ComponentFixture<RedacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
