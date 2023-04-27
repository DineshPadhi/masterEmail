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
  myForm:FormGroup

  constructor(private fb:FormBuilder, private formService:FormServiceService){
    this.createForm()
  }


  ngOnInit():void {
    
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

  submit(){
    // e.preventDefault();
    let formData:any = new FormData();
    formData.append('TemplateName', this.myForm.get('TemplateName').value)
    formData.append('TemplateCode', this.myForm.get('TemplateCode').value)
    formData.append('Scenario', this.myForm.get('Scenario').value)
    formData.append('Providers', this.myForm.get('Providers').value)
    formData.append('User', this.myForm.get('User').value)
    formData.append('Tier', this.myForm.get('Tier').value)
    formData.append('EmailType', this.myForm.get('EmailType').value)
    formData.append('Activity', this.myForm.get('Activity').value)
    formData.append('Status', this.myForm.get('Status').value)
    formData.append('TargetAudience', this.myForm.get('TargetAudience').value)
    formData.append('Subject', this.myForm.get('Subject').value)
    formData.append('Body', this.myForm.get('Body').value)




    this.formService.submitForm(formData).subscribe((result:any)=>{
      // let get = JSON.stringify(result)
      // get = JSON.parse(get)
      // console.log(get);
      console.log('result========>>>>>>>>',result.data);
      
    })
  }

}
