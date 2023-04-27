import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  data:any = []
  myForm?:FormGroup

  constructor(private fb:FormBuilder, private formService:FormServiceService){}


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

  submit(e:any){
    e.preventDefault();
    this.formService.submitForm(this.myForm).subscribe((result:any)=>{
     console.log(result);
      
    })
  }

}
