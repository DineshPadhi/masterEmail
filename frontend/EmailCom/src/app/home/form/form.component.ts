import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  host: {
    '[sandbox]': `'allow-scripts'`,
    '[attr.sandbox]': `'allow-scripts'`,
  },
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('iframe') preview_iframe: ElementRef;

  data: any = [];
  formData: any = [];
  myForm: FormGroup;
  preview: any = [];
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  urlSafe: SafeResourceUrl;
  htmlContent: string = '';
  dropdownUserList = [];
  dropdownUser: IDropdownSettings = {};
  userArry: any = [];
  getData: any = '';

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router,
    private toastr: ToastrService,
    public sanitizer: DomSanitizer
  ) {
    this.createForm();
  }

  ngOnInit(): void {
<<<<<<< HEAD

=======
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
    this.dropdownUserList = [
      { item_id: 1, item_text: 'User 1' },
      { item_id: 2, item_text: 'User 2' },
      { item_id: 3, item_text: 'User 3' },
    ];
    this.dropdownUser = {
      idField: 'item_id',
      textField: 'item_text',
    };

    this.dropdownList = [
      { item_id: 1, item_text: 'English' },
      { item_id: 2, item_text: 'Hindi' },
      { item_id: 3, item_text: 'Marathi' },
    ];

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
  }

  safehtmlinput($event: any) {
    this.htmlContent = $event.target.value;
    const iframe = document.getElementById('preview_iframe_5');
    iframe['contentWindow'].document.open();
    iframe['contentDocument'].write(this.htmlContent);
    iframe['contentWindow'].document.close();

    return this.urlSafe;
  }

<<<<<<< HEAD

=======
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
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
      lang: [''],
    });
  }


  submit(data: any) {
    this.formService.submitForm(data).subscribe((result: any) => {
<<<<<<< HEAD
      // console.log('result========>>>>>>>>', result.data);
      if (result) {
        this.router.navigate(['/allTemplateData']);
        // console.log('result====', result);
        this.toastr.success<any>('Your Data Submited successfully!!')
=======
      if (result) {
        this.router.navigate(['/allTemplateData']);
        this.toastr.success<any>('Your Data Submited successfully!!');
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
      }
    });
  }

  reset() {
    this.myForm.reset();
  }

  seePreview(event: any) {
    this.preview = event.target.value;
<<<<<<< HEAD
    // console.log(this.preview);
=======
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
  }

  selectedValue: any = '';

  onSelect(value: any) {
    this.selectedValue = value;
  }
<<<<<<< HEAD

=======
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
}
