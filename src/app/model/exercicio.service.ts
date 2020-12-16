import { Questao } from './questao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {
  public URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  /*obterQuestoes(): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.URL}/tbquestoes`);
  }*/

  /*CÓDIGO QUE ALTEREI E NÃO TAVA MOSTRANDO AS QUESTÕES*/

  obterQuestoes(cod_disciplina: number, cod_assunto: number): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.URL}/tbquestoes/${cod_disciplina}/${cod_assunto}`);
  } /* CÓDIGO QUE TÁ DANDO ERRO*/
=======
  obterQuestoes(cod_disc: number, cod_assunto: number): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.URL}/tbquestoes/${cod_disc}/${cod_assunto}`);
  }

  obterQuestoesPortugues(cod_disc: number): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.URL}/tbquestoes/${cod_disc}`);
  }
>>>>>>> cbb87a5eda82ed72ded068ceaa06fbdbe4a28d2b
  
  
  
  
}