import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import { AccueilRoutingModule } from './accueil-routing.module'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class AccueilModule { }
