import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from './http.service';
import { PromiseService } from './service/promise.service';
import { ModelContact } from './model/model-contact';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableComponent
  ],
  providers: [
    HttpService,
    PromiseService,
    ModelContact
  ]
})
export class SharedModule { }
