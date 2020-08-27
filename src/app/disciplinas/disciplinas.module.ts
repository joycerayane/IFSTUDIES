import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DisciplinasComponent } from './disciplinas.component';
import { PortuguesComponent } from './portugues/portugues.component';
import { MatematicaComponent } from './matematica/matematica.component';
import { RedacaoComponent } from './redacao/redacao.component';
import { DisciplinasRoutingModule } from './disciplinas.routing.module';

@NgModule({
	imports: [
		CommonModule,
		DisciplinasRoutingModule
	],

	exports: [],

	declarations: [
	DisciplinasComponent, 
	PortuguesComponent, 
	MatematicaComponent, 
	RedacaoComponent
	],

	providers: [],
})

export class DisciplinasModule { }