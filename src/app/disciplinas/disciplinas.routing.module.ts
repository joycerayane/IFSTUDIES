import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DisciplinasComponent } from './disciplinas.component';
import { PortuguesComponent } from './portugues/portugues.component';
import { MatematicaComponent } from './matematica/matematica.component';
import { RedacaoComponent } from './redacao/redacao.component';

const disciplinasRoutes = [
	{path: 'disciplinas', component: DisciplinasComponent, children : [
		{path: 'portugues/:id', component: PortuguesComponent },
		{path: 'matematica/:id', component: MatematicaComponent },
		{path: 'redacao/:id', component: RedacaoComponent },
	]},

];


@NgModule({
	imports: [RouterModule.forChild(disciplinasRoutes)],
	exports: [RouterModule]
	
})

export class DisciplinasRoutingModule {}