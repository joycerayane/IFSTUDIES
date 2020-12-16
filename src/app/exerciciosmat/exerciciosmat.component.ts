import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questao } from './../model/questao';
import { ExercicioService } from './../model/exercicio.service';

@Component({
  selector: 'app-exerciciosmat',
  templateUrl: './exerciciosmat.component.html',
  styleUrls: ['./exerciciosmat.component.css']
})
export class ExerciciosmatComponent implements OnInit {

  Icone = 'https://image.flaticon.com/icons/svg/926/926358.svg';

  questoes: Questao[];
  escolha: string;
  acertou: boolean = undefined;
  constructor( private route: ActivatedRoute, private ex: ExercicioService) {
    this.escolha = '';
    this.acertou = true;
    
    
  }

  ngOnInit(): void {


  }

  mostrarQuestoesDisciplina: boolean = true;


  
  QuestoesMatematica1(){
    
    const cod_disc: number = +this.route.snapshot.paramMap.get('cod_disc');
    const cod_assunto: number = +this.route.snapshot.paramMap.get('cod_assunto');

    this.ex.obterQuestoes(2,1 ).subscribe(res => {
      
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
