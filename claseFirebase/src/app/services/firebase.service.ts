import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

URLruta = "https://fir-1-4b29e.firebaseio.com/";

  constructor(private _http: HttpClient) { }

  getUsuarios(){
    return this._http.get(`${this.URLruta}Usuarios.json`);
  }
  getUsuarioParticular(id: string){
    return this._http.get(`${this.URLruta}Usuarios/${id}.json`);
  }
}
