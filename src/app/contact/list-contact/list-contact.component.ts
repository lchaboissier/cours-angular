import { Component, OnInit } from '@angular/core';
import { ModelContact } from 'src/app/shared/model/model-contact';
import { PromiseService } from 'src/app/shared/service/promise.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  constructor(public promise : PromiseService, public modelContact : ModelContact) { }

  public dataSource : any = [];

  public displayedColumns : any = [];

  public loading: boolean = true;

  ngOnInit(): void {
    this.loading = true;
    this.displayedColumns = this.modelContact.getContactModel()['listContact'];
    this.promise.getList().then(value => {
      this.dataSource = value;
      this.loading = false;
      console.log(this.displayedColumns);
      console.log(this.dataSource);
    })
  }

  public getLine(object : any)
  {
    console.log(object);
  }

}
