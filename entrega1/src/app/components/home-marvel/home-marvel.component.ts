import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-marvel',
  templateUrl: './home-marvel.component.html',
  styleUrls: ['./home-marvel.component.css']
})
export class HomeMarvelComponent implements OnInit {
  bandera = true; 

  heroes = [
    {
      "nombre": "Capitán America",
      "img": "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/84965.jpg"
    },
    {
      "nombre": "Iron Man",
      "img": "https://img.ecartelera.com/noticias/45600/45641-m.jpg"
    },
    {
      "nombre": "Thor",
      "img": "https://sm.ign.com/t/ign_es/screenshot/default/thor-in-avengers-endgame-1200x715_6gqc.1200.jpg"
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
