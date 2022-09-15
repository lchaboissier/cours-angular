import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [{
  path : "create",
  component: CreateContactComponent
},{
  path : "contact",
  component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactRoutingModule { }
