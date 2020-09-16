import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent implements OnInit {

  questoes = [{
    enunciado: 'Qual o valor aproximado de PI?',
    a: 2.56, b: 3.14, c: 3.16, d: 1.68, certa: 'b'
  }];

  escolha: string;
  acertou: boolean;
  constructor() {
    
  }

  ngOnInit(): void {
    
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