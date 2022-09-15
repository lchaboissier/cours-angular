import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactModule } from './contact/contact.module';

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
  path : "contact",
  loadChildren: () => import('./contact/contact.module').then(m => ContactModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
