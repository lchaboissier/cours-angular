import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContactComponent,
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContactModule { }
