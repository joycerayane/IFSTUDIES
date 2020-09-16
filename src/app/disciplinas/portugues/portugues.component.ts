import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portugues',
  templateUrl: './portugues.component.html',
  styleUrls: ['./portugues.component.css']
})
export class PortuguesComponent implements OnInit {

  Icone = 'https://image.flaticon.com/icons/svg/926/926358.svg';


  paginaCarregada = "";
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  lista: boolean = true;

  obterArquivo(caminho: string): void {
    this.http.get(caminho, { responseType: 'text' }).subscribe((html) =>
      this.paginaCarregada = html);
      this.lista = !this.lista;
  }



}

