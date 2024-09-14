import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula04Component } from './aula-04.component';

describe('Aula04Component', () => {
  let component: Aula04Component;
  let fixture: ComponentFixture<Aula04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
