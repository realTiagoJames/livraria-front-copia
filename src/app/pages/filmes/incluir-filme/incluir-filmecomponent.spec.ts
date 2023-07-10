import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirFilmeComponent } from './incluir-filme.component';

describe('IncluirFilmeComponent', () => {
  let component: IncluirFilmeComponent;
  let fixture: ComponentFixture<IncluirFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
