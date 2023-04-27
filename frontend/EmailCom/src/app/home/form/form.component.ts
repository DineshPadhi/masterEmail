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
      // Preview : ['', Validators.required]
    })
  }

  submit(e:any){
    e.preventDefault();
    let formData:any = new FormData();
    formData.append('TemplateName', this.myForm.get('TemplateName'))
    formData.append('TemplateCode', this.myForm.get('TemplateCode'))
    formData.append('Scenario', this.myForm.get('Scenario'))
    formData.append('Providers', this.myForm.get('Providers'))
    formData.append('User', this.myForm.get('User'))
    formData.append('Tier', this.myForm.get('Tier'))
    formData.append('EmailType', this.myForm.get('EmailType'))
    formData.append('Activity', this.myForm.get('Activity'))
    formData.append('Status', this.myForm.get('Status'))
    formData.append('TargetAudience', this.myForm.get('TargetAudience'))
    formData.append('Subject', this.myForm.get('Subject'))
    formData.append('Body', this.myForm.get('Body'))




    this.formService.submitForm(formData).subscribe((result:any)=>{
      // let get = JSON.stringify(result)
      // get = JSON.parse(get)
      // console.log(get);
      console.log(result);
      
    })
  }

}
