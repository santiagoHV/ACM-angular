import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { HomeDcComponent } from './components/home-dc/home-dc.component';
import { HomeMarvelComponent } from './components/home-marvel/home-marvel.component';
import { TrabajoClase2Component } from './components/trabajo-clase2/trabajo-clase2.component';
import { TrabajoClas2HeroeComponent } from './components/trabajo-clas2-heroe/trabajo-clas2-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeDcComponent,
    HomeMarvelComponent,
    TrabajoClase2Component,
    TrabajoClas2HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
