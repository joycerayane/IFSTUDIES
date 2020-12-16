import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { SimuladosComponent } from './simulados/simulados.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { ProcseletivoComponent } from './procseletivo/procseletivo.component';
import { FooterComponent } from './footer/footer.component';
import { ExerciciosmatComponent } from './exerciciosmat/exerciciosmat.component';





@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ExerciciosComponent,
    SimuladosComponent,
    SobreComponent,
    HomeComponent,
    CursosComponent,
    EstrategiaComponent,
    DesenvolvedoresComponent,
    ProcseletivoComponent,
    FooterComponent,
    ExerciciosmatComponent
  ],
  imports: [
    BrowserModule,
    DisciplinasModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
