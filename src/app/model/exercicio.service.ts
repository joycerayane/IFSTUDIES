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

  obterQuestoes(): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.URL}/tbquestoes`);
  }
  
  
  
  
}
