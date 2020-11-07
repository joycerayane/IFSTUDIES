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

  questoes: Questao[];
  escolha: string;
  acertou: boolean = undefined;
  constructor( private route: ActivatedRoute, private ex: ExercicioService) {
    this.escolha = '';
    this.acertou = true;
    
    
  }

  ngOnInit(): void {

    this.ex.obterQuestoes().subscribe(res => {
      this.questoes = res;
    });

  }

  mostrarQuestoesDisciplina: boolean = true;


  QuestoesDisciplina(){
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