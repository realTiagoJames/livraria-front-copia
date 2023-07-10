import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IncluirFilmeComponent } from './pages/filmes/incluir-filme/incluir-filme.component';
import { ListarFilmesComponent } from './pages/filmes/listar-filmes/listar-filmes.component';

const routes: Routes = [

      { path: 'filmes', component: ListarFilmesComponent },
      { path: 'filmes/incluir', component: IncluirFilmeComponent },
      { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
