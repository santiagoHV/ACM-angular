import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
heroe: any = {};
  constructor(private rutaActivada: ActivatedRoute,private servicioHeroes: HeroesService) {
    this.rutaActivada.params.subscribe(data =>{
      this.heroe = this.servicioHeroes.getDatosDeHeroe(data['id']);
    })
   }

  ngOnInit(): void {
  }

}
