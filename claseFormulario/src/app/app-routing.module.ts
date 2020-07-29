import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactComponent } from './pages/react/react.component';


const routes: Routes = [
  {
    path: 'form', component: TemplateComponent
  },
  {
    path: 'react', component: ReactComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'react'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
