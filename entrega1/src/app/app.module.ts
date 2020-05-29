import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { HomeDcComponent } from './components/home-dc/home-dc.component';
import { HomeMarvelComponent } from './components/home-marvel/home-marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeDcComponent,
    HomeMarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
