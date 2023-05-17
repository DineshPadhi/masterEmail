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
  emailForm: any;
  languageArray: any = ['English', 'Hindi', 'Marathi'];

  constructor(
    private fb: FormBuilder,
    private sendService: FormServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.myForm = this.fb.group({
      tos: this.fb.array([]),
      templateCode: '',
    });
  }

  ngOnInit(): void {}
  onSelect(value: any) {
    this.selectedValue = value;
  }

  createForm(): FormArray {
    return this.myForm.get('tos') as FormArray;
  }

  newcreateForm(): FormGroup {
    return this.fb.group({
      tname: '',
      lang: '',
    });
  }
  // this.formfields = {
  //   templateCode: [''],
  //   tname1: [''],
  //   lang1: [''],
  // };

  addInp() {
    this.createForm().push(this.newcreateForm());
    console.log('create form array is', this.createForm().value);
  }

  remove(i: number) {
    this.createForm().removeAt(i);
  }

  onSubmit(value: any) {
    console.log('value is--->>', value);

    this.sendService.sendMail(value).subscribe((result: any) => {
      // console.log('yesssh');

      if (result) {
        console.log('result in send mail file---->.', result);

        this.router.navigate(['/allTemplateData']);

        this.toastr.success<any>('Mail Send successfully!!');
      }
    });
  }
  //   createForm(value: any) {
  //     this.formfields={
  //       templateCode: value.templateCode,
  //     };
  //     for (let i = 1; i <= this.addArr.length; i++) {
  //       this.formfields[`tname${i}`] = value[`tname${i}`] || [''];
  //       this.formfields[`lang${i}`] = value[`lang${i}`] || [''];
  //     }

  //     this.myForm = this.fb.group(this.formfields);
  //   }
  //   addInp(value: any) {
  //     this.add += 0;
  //   // console.log('addArr in add  is',this.addArr);
  //   // console.log('add in add is',this.add);

  //     this.addArr.push(this.add);

  //     this.createForm(value);
  //   }

  //   send(data: any) {
  //     console.log('data before sending',data);

  //     this.sendService.sendMail(data).subscribe((result:any)=>{
  //       console.log('yesssh');

  //       if (result) {
  //         console.log('result in send mail file---->.',result);

  //         this.router.navigate(['/allTemplateData']);

  //         this.toastr.success<any>('Mail Send successfully!!');

  //             }
  //           })
  //         }

  //       // } else {
  //       //   this.formService.submitForm(data).subscribe((result: any) => {
  //       //     if (result) {
  //       //       console.log('result in form',result);

  //       //       console.log(result.data.templateCode);

  //       //       this.router.navigate(['/allTemplateData']);
  //       //       this.toastr.success<any>('Your Data Submited successfully!!');
  //       //     }
  //       //   });
  //       // }
  //  remove(value:any){
  //   if (this.add>=2) {

  //   //   console.log('value is',value+1);
  //    const index = this.addArr.indexOf(value+1);
  //   //  console.log('index is',index);
  //   //  console.log('addArr is before',this.addArr);

  //   //  console.log('add is before',this.add);

  //   this.add -=1;
  //   //  console.log('add is after',this.add);
  //   //  console.log('addArr  is after',this.addArr);
  //   // this.formfields[`tname${value+1}`] = [''];
  //   //     this.formfields[`lang${value+1}`] =  [''];
  //   //     console.log('formrmrmrmrrm',this.formfields);

  //  if (index > -1) { // only splice array when item is found
  //    this.addArr.splice(value, 1); // 2nd parameter means remove one item only
  //  }
  //    this.addArr.remove(value)
  //   }
  // }
  // e.preventDefault();
  // this.value = data;
  // console.log(this.value);

  // remove(i:number){
  //   i = this.addArr.indexOf(i+1);

  //   this.add -=1;
  //   this.addArr.pop(this.add -=1)
  // }
}
