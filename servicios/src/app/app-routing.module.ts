import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'heroe/:id', component: HeroeComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
