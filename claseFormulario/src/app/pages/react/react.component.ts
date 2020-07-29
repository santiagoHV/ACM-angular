import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder, Validator, FormArray} from'@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
      this.crearFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      correo: ['']
    });
  }
  guardar(){
    console.log();
  }
}
