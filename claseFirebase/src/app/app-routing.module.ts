import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'form/:id', component: FormComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'form/nuevo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
