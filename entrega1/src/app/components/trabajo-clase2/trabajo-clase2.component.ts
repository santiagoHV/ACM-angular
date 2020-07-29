import { Component, OnInit } from '@angular/core';
import { HeroesService, heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-trabajo-clase2',
  templateUrl: './trabajo-clase2.component.html',
  styleUrls: ['./trabajo-clase2.component.css']
})
export class TrabajoClase2Component implements OnInit {

  heroes: heroe[] = [];

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

}
