import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { ListContactComponent } from './list-contact/list-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ListContact2Component } from './list-contact2/list-contact2.component';
import { PrintContactComponent } from './print-contact/print-contact.component';

@NgModule({
  declarations: [
    ContactComponent,
    CreateContactComponent,
    ListContactComponent,
    ListContact2Component,
    PrintContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class ContactModule { }
