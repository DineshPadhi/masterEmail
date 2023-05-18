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

      if (result) {
        console.log('result in send mail file---->.', result);

        this.router.navigate(['/allTemplateData']);

        this.toastr.success<any>('Mail Send successfully!!');
      }
    });
  }
  
}
