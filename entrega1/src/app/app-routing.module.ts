import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDcComponent } from './components/home-dc/home-dc.component';
import { HomeMarvelComponent } from './components/home-marvel/home-marvel.component';
import { TrabajoClase2Component } from './components/trabajo-clase2/trabajo-clase2.component';


const routes: Routes = [
  {
    path: 'homeDc', component: HomeDcComponent
  },
  {
    path: 'homeMarvel', component: HomeMarvelComponent
  },
  {
    path: 'homeClase', component: TrabajoClase2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
