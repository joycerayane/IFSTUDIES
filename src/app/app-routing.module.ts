import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { SimuladosComponent } from './simulados/simulados.component';
import { SobreComponent } from './sobre/sobre.component';
import { CursosComponent } from './cursos/cursos.component';
import { EstrategiaComponent } from './estrategia/estrategia.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';



const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'disciplinas', component: DisciplinasComponent },
	{ path: 'exercicios', component: ExerciciosComponent },
	{ path: 'simulados', component: SimuladosComponent },
	{ path: 'sobre', component: SobreComponent },
	{ path: 'cursos', component: CursosComponent },
	{ path: 'estrategia', component: EstrategiaComponent },
	{ path: 'desenvolvedores', component: DesenvolvedoresComponent}
	


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

