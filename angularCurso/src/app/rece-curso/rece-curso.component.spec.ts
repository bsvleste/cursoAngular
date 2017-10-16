import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceCursoComponent } from './rece-curso.component';

describe('ReceCursoComponent', () => {
  let component: ReceCursoComponent;
  let fixture: ComponentFixture<ReceCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
