import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from '../../form-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css'],
})
export class SendMailComponent {
  selectedValue: any = '';
  myForm: FormGroup;
  add: number = 1;
  addArr: any = [1];
  formfields: any = {
    templateCode: [''],
    tname1: [''],
    lang1: [''],
  };
  emailForm: any;
  constructor(
    private fb: FormBuilder ,
    private sendService : FormServiceService,
    private router : Router,
    private toastr: ToastrService 
  )
  {
    this.createForm(' ');
  }

  ngOnInit(): void {}
  onSelect(value: any) {
    this.selectedValue = value;
  }

  createForm(value: any) {
    for (let i = 1; i <= this.addArr.length; i++) {
      this.formfields[`tname${i}`] = value[`tname${i}`] || [''];
      this.formfields[`lang${i}`] = value[`lang${i}`] || [''];
    }

    this.myForm = this.fb.group(this.formfields);
  }
  addInp(value: any) {
    this.add += 1;
    console.log('e is', value);

    this.addArr.push(this.add);

    this.createForm(value);
  }

  value: any;

  send(data: any, e: any) {
    console.log('data before sending',data);
    
    this.sendService.sendMail(data).subscribe((result:any)=>{
      if (result) {
        console.log('result---->.',result);
        
              // this.router.navigate(['/allTemplateData']);
              // this.toastr.success<any>('Your Data Submited successfully!!');
            }
    })

    // e.preventDefault();
    // this.value = data;
    // console.log(this.value);
  }
}
