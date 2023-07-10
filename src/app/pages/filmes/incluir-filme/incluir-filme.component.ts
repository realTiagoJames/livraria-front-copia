import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { FilmeAdd } from 'src/app/models/filmeAdd';
import { AutorService } from 'src/app/services/autor.service';
import { FilmeService } from 'src/app/services/filme.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-incluir-filme',
  templateUrl: './incluir-filme.component.html',
  styleUrls: ['./incluir-filme.component.css']
})
export class IncluirFilmeComponent implements OnInit {
  public form: FormGroup;
  public filmeAdd: FilmeAdd;
  public autores: Autor[] = []; 

  constructor(
    private fb: FormBuilder,
    private filmeService: FilmeService,
    private autorService: AutorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]], 
      autor: ['', [Validators.required]], 
      genero: [ '', [Validators.required]],
      agencia: [ '', [Validators.required]],
    });

    this.autorService.getAll().subscribe(
      (sucesso: Autor[]) => {
        this.autores = sucesso;
      }
    );


  }

  salvar(){
    if(this.form.valid){
      this.filmeAdd = Object.assign({}, this.filmeAdd, this.form.value);
      console.log(JSON.stringify(this.filmeAdd));
      this.filmeService.incluir(this.filmeAdd).subscribe(
        sucesso => this.router.navigate([`filmes`]).then()
      )
    }
  }

  cancelar(){
    this.router.navigate([`filmes`]).then()
  }


}
