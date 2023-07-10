import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {
  public filmes: Filme[] = [];

  constructor(private filmesService: FilmeService) { }

  ngOnInit(): void {
    this.filmesService.getAll().subscribe(
      (sucesso: Filme[]) => {
        this.filmes = sucesso;
      }
    );

  }

}
