import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelContact } from 'src/app/shared/model/model-contact';
import { PromiseService } from 'src/app/shared/service/promise.service';

@Component({
  selector: 'app-print-contact',
  templateUrl: './print-contact.component.html',
  styleUrls: ['./print-contact.component.scss']
})
export class PrintContactComponent implements OnInit {

  constructor(private router : ActivatedRoute, public promise : PromiseService, public modelContact : ModelContact) { }

  public dataSource : any = [];

  public displayedColumns : any = [];

  public loading: boolean = true;

  public contact = [];

  ngOnInit(): void {
    let local = localStorage.getItem("listContact");

    if(local){
      let varlocal = JSON.parse(local);
      this.contact = varlocal.filter((element:any) => element.id == this.router.snapshot.paramMap.get("idRef"));
      console.log(this.contact);
      this.loading = false;
      
    }
    console.log(this.router.snapshot.paramMap.get("idRef"));
  }

  public getLine(object : any)
  {
    console.log(object);
  }

}
