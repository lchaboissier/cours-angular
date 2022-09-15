import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class ContactModule { }
