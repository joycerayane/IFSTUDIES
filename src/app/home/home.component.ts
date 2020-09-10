import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagem01 = './assets/imagem01-carousel.jpg';
  imagem02 = './assets/imagem02-carousel.jpg';

  imageLogo = './assets/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
