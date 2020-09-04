import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { SimuladosComponent } from './simulados/simulados.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { CheckComponent } from './check/check.component';
import { CursosComponent } from './cursos/cursos.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';


const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'disciplinas', component: DisciplinasComponent },
	{ path: 'exercicios', component: ExerciciosComponent },
	{ path: 'simulados', component: SimuladosComponent },
	{ path: 'sobre', component: SobreComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'check', component: CheckComponent },
	{ path: 'cursos', component: CursosComponent },
	{ path: 'estrategia', component: EstrategiaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

