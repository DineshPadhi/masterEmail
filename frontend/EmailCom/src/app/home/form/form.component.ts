import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{


  data:any = []
  formData:any = []
  myForm:FormGroup
  preview:any = []

  constructor(private fb:FormBuilder, private formService:FormServiceService){
    this.createForm()
  }


  ngOnInit():void {
    
  }

  createForm() {
    this.myForm = this.fb.group({
      TemplateName : ['', Validators.required],
      Template_Code : ['', Validators.required],
      Scenario : [''],
      Providers : ['', Validators.required],
      User : ['', Validators.required],
      Tier : ['', Validators.required],
      EmailType : ['', Validators.required],
      Activity : [''],
      Status : ['', Validators.required],
      TargetAudience : ['', Validators.required],
      Subject : ['', Validators.required],
      Body : ['', Validators.required]
    })
  }

  submit(data:any){

    this.formService.submitForm(data).subscribe((result:any)=>{
     
      console.log('result========>>>>>>>>',result.data);
      
    })
  }


  reset(){
    if(this.myForm.dirty || this.myForm.valid){
      this.myForm.reset();
    }
  }

  seePreview(event:any){
    
    this.preview.push(event.target.value)
    
    console.log(this.preview)
  }

}
