import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  constructor( public fb : FormBuilder) { }

  public registerForm: FormGroup = this.fb.group({
    nom : ["test", Validators.required],
    prenom : ["medina", Validators.required],
    adresse : [, Validators.required],
    email : [, Validators.email],
    tel : [, Validators.required]
})

  ngOnInit(): void {
    
  }

  public submit()
  {
    if(this.registerForm.invalid){
      console.log(this.registerForm.value);
    }
    else{

    }
  }

}