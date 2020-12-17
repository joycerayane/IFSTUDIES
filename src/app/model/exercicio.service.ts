import { Questao } from './../model/questao';
import { ExercicioService } from './../model/exercicio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent implements OnInit {

  Icone = 'https://image.flaticon.com/icons/svg/926/926358.svg';

  questoes: Questao[];
  escolha: string;
  acertou: boolean = undefined;
 
  constructor( private route: ActivatedRoute, private ex: ExercicioService) {
    this.escolha = '';
    this.acertou = true;
    
    
  }

  ngOnInit() {
    


  }

  mostrarQuestoesDisciplina: boolean = true;


 
  QuestoesPortugues1(cod_disc: number, cod_assunto: number){
    
    /*const cod_disc: number = +this.route.snapshot.paramMap.get('cod_disc');
    const cod_assunto: number = +this.route.snapshot.paramMap.get('cod_assunto'); */
    console.log(cod_disc);
    console.log(cod_assunto);
    this.ex.obterQuestoes(cod_disc, cod_assunto).subscribe(res => {
     this.questoes = res;
    });
    this.mostrarQuestoesDisciplina = !this.mostrarQuestoesDisciplina;
  }


  RetornarListaDisciplina(){
    this.mostrarQuestoesDisciplina = true;
  }

  verificarResposta(correta: string, escolha: string) {
    this.escolha = escolha;
    if (escolha === correta) {
      this.acertou = true;
    } else {
      this.acertou = false;
    }
  }
}