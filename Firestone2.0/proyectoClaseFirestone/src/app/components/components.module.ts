import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarrComponent } from './navbarr/navbarr.component';


@NgModule({
  declarations: [FooterComponent, NavbarrComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarrComponent
  ]
})
export class ComponentsModule { }
