import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageMenina = './assets/menina_estudando.png';

  IconeEstudo = 'https://image.flaticon.com/icons/svg/2145/2145296.svg';

  IconeCheck = 'https://image.flaticon.com/icons/svg/1373/1373009.svg';

  IconeCursos = 'https://image.flaticon.com/icons/svg/2000/2000920.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
