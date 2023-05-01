import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  data: any = [];
  formData: any = [];
  myForm: FormGroup;
  preview: any = [];

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    // console.log(this.selectedValue.length);
  }

  createForm() {
    this.myForm = this.fb.group({
      templateName: ['', Validators.required],
      templateCode: ['', Validators.required],
      scenario: [''],
      providers: ['', Validators.required],
      user: ['', Validators.required],
      tier: ['', Validators.required],
      emailType: ['', Validators.required],
      activity: [''],
      status: ['', Validators.required],
      targetAudience: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  submit(data: any) {
    this.formService.submitForm(data).subscribe((result: any) => {
      // console.log('result========>>>>>>>>', result.data);
      if(result){
        this.router.navigate(['/allTemplateData'])
        console.log('result====',result)
      }
    });
  }

  reset() {
      this.myForm.reset();
  }

  seePreview(event: any) {
    this.preview = event.target.value;

    // console.log(this.preview);
  }

  // getDropdown(){
  //   document.getElementById('TaDrop2').ariaValueText = document.getElementById('TaDrop').ariaValueText
  // }


  selectedValue:any = ''
  // error:any

  onSelect(value:any){
    // this.selectedValue = document.getElementById('inp');
    this.selectedValue = value
  }

}
