import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  perfil = {
    nombre: '',
    apellido: '',
    correo: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar(formulario: NgForm){
    console.log(formulario.value);
  }

}
