import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarFilmesComponent } from './pages/filmes/listar-filmes/listar-filmes.component';
import { FilmeService } from './services/filme.service';
import { HomeComponent } from './pages/home/home.component';
import { IncluirFilmeComponent } from './pages/filmes/incluir-filme/incluir-filme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutorService } from './services/autor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarFilmesComponent,
    HomeComponent,
    IncluirFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    FilmeService,
    AutorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
