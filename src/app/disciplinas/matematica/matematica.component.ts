import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.css']
})
export class MatematicaComponent implements OnInit {

  Icone = 'https://image.flaticon.com/icons/svg/926/926358.svg';


  paginaCarregada = "";
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  obterArquivo(caminho: string): void {
    this.http.get(caminho, { responseType: 'text' }).subscribe((html) =>
      this.paginaCarregada = html);
  }

}
