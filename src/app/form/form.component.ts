import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { detailed } from '../casting';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  form: FormGroup;
  model:detailed[] = [];
  constructor(private fb: FormBuilder,public formService: FormService){

  }
  submitted=false;
  submit(){
  if(this.form.value.name!="" && this.form.value.email!="" && this.form.value.feedback!=""){
    this.model=this.form.value;
	alert("Form submitted succesfully!");
  }
  else{
    alert("Form invalid!");
  }
  
  }
  ngOnInit(): void{
    this.formService.getDetails().subscribe(data => this.model = data);
    this.formService.getFormDetails().subscribe(data =>{this.form=this.fb.group(data);});
  }
}
