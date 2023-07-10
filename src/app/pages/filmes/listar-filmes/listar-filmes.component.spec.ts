import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFilmesComponent } from './listar-filmes.component';

describe('ListarFilmeComponent', () => {
  let component: ListarFilmesComponent;
  let fixture: ComponentFixture<ListarFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
