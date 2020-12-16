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

  obterQuestoes(cod_disc: number, cod_assunto: number): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.URL}/tbquestoes/${cod_disc}/${cod_assunto}`);
  }

  
  
  
  
}