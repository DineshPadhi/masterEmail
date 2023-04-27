import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // TemplateName:any
  // TemplateCode:any
  // Scenario:any
  // Providers:any
  // User:any
  // Tier:any
  // EmailType:any
  // Activity:any
  // Status:any
  // TargetAudience:any
  // Subject:any
  // Body:any
  // Preview:any


  myForm?:FormGroup

  constructor(private fb:FormBuilder){}


  ngOnInit():void {
    this.createForm()
  }

  createForm() {
    this.myForm = this.fb.group({
      TemplateName : ['', Validators.required],
      TemplateCode : ['', Validators.required],
      Scenario : [''],
      Providers : ['', Validators.required],
      User : ['', Validators.required],
      Tier : ['', Validators.required],
      EmailType : ['', Validators.required],
      Activity : [''],
      Status : ['', Validators.required],
      TargetAudience : ['', Validators.required],
      Subject : ['', Validators.required],
      Body : ['', Validators.required],
      Preview : ['', Validators.required]
    })
  }

}
