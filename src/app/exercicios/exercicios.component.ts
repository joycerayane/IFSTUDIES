import { Questao } from './../model/questao';
import { ExercicioService } from './../model/exercicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent implements OnInit {

  questoes: Questao[];
  escolha: string;
  acertou: boolean;
  constructor(private ex: ExercicioService) {
    this.escolha = '';
    this.acertou = undefined;
  }

  ngOnInit(): void {
    this.ex.obterQuestoes().subscribe(res => {
      this.questoes = res;
    });
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