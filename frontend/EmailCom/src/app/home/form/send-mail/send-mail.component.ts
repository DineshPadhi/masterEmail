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
    tname1: [''],
    lang1: [''],
    templateCode: [''],
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
    this.formfields={
      templateCode: value.templateCode,
    };
    for (let i = 1; i <= this.addArr.length; i++) {
      this.formfields[`tname${i}`] = value[`tname${i}`] || [''];
      this.formfields[`lang${i}`] = value[`lang${i}`] || [''];
    }

    this.myForm = this.fb.group(this.formfields);
  }
  addInp(value: any) {
    this.add += 1;
  // console.log('addArr in add  is',this.addArr);
  // console.log('add in add is',this.add);
    

    this.addArr.push(this.add);

    this.createForm(value);
  }

 

  send(data: any, e: any) {
    console.log('data before sending',data);
    
    this.sendService.sendMail(data).subscribe((result:any)=>{
      if (result) {
        console.log('result---->.',result);
        
              this.router.navigate(['/allTemplateData']);
              this.toastr.success<any>('Your Data Submited successfully!!');
            }
          })
        }


 remove(value:any){
  if (this.add>=2) {
    
    console.log('value is',value+1);
  //  const index = this.addArr.indexOf(value+1);
  //  console.log('index is',index);
   console.log('addArr is before',this.addArr);
   
  //  console.log('add is before',this.add);
 
   console.log('add is after',this.add);
   console.log('addArr  is after',this.addArr);
  this.formfields[`tname${value+1}`] = [''];
      this.formfields[`lang${value+1}`] =  [''];
  //     console.log('formrmrmrmrrm',this.formfields);
      
 
 
//  if (index > -1) { // only splice array when item is found
   this.addArr.splice(value, 1); // 2nd parameter means remove one item only
  this.add -=1;
//  }
  //  this.addArr.remove(value)
  }
}
  // e.preventDefault();
  // this.value = data;
  // console.log(this.value);

}
