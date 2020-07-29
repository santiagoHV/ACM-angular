import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { UsuariosModel } from '../../models/Usuarios.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id = null;
  usuarios: UsuariosModel = new UsuariosModel();

  constructor(private servicio: FirebaseService, private rutaActivada: ActivatedRoute) { 
    this.id = this.rutaActivada.snapshot.paramMap.get('id');
    if(this.id != 'nuevo'){ 
      this.servicio.getUsuarioParticular(this.id).subscribe( (data: UsuariosModel) =>{
        console.log(data);
        this.usuarios = data;
        this.usuarios.id_usuario = this.id;
        console.log(this.usuarios.Nombre);
      });
    }else{
      this.usuarios.id_usuario = null;
    }
  }

  ngOnInit(): void {
    
  }

}
