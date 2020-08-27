import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { SimuladosComponent } from './simulados/simulados.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    ExerciciosComponent,
    SimuladosComponent,
    SobreComponent,
    LoginComponent,
    HomeComponent
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
