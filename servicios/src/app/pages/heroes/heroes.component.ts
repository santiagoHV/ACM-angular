import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { HeroeInterface } from '../../../../../heroes/src/app/interface/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: HeroeInterface[] = [];
  constructor(private servicioDeEntrada: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.servicioDeEntrada.getDatosDeHeroes();
  }

}
 