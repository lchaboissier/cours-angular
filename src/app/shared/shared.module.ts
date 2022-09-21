import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from './http.service';
import { PromiseService } from './service/promise.service';
import { ModelContact } from './model/model-contact';
import { MatButtonModule } from '@angular/material/button';
import { BoldPipe } from './pipe/bold.pipe';

@NgModule({
  declarations: [
    TableComponent,
    BoldPipe,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    TableComponent,
    BoldPipe
  ],
  providers: [
    HttpService,
    PromiseService,
    ModelContact
  ]
})
export class SharedModule { }
