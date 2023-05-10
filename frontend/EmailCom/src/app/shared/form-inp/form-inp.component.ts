import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { FormServiceService } from 'src/app/home/form-service.service';
import { FilterService } from '../../filter/filter.service';

@Component({
  selector: 'app-form-inp',
  templateUrl: './form-inp.component.html',
  styleUrls: ['./form-inp.component.css']
})
export class FormInpComponent implements OnInit {

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
  id: any;
  formType:boolean

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private active: ActivatedRoute,
    private FilterService: FilterService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dropdownUserList = [
      { item_id: 1, item_text: 'cpkushwaha9833@gmail.com' },
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
    };

    this.active.paramMap.subscribe((params) => {
      if(params.get('id')){
      this.id = params.get('id');

      this.FilterService.getDataById(this.id).subscribe((result: any) => {
        this.htmlContent = result.data[0].body;
        const iframe = document.getElementById('preview_iframe_5');
        iframe['contentWindow'].document.open();
        iframe['contentDocument'].write(this.htmlContent);
        iframe['contentWindow'].document.close();
        if (this.id) {
          this.myForm.patchValue({
            templateName: result.data[0].templateName,
            templateCode: result.data[0].templateCode,
            scenario: result.data[0].scenario,
            providers: result.data[0].providers,
            user: result.data[0].user,
            tier: result.data[0].tier,
            emailType: result.data[0].emailType,
            activity: result.data[0].activity,
            status: result.data[0].status,
            targetAudience: result.data[0].targetAudience,
            subject: result.data[0].subject,
            body: result.data[0].body,
            lang: result.data[0].lang,
          });
        }
      });
    }
    });


    if(this.router.url === '/createEmailTemplate')
    this.formType = true
  }

  safehtmlinput($event: any) {
    this.htmlContent = $event.target.value;
    const iframe = document.getElementById('preview_iframe_5');
    iframe['contentWindow'].document.open();
    iframe['contentDocument'].write(this.htmlContent);
    iframe['contentWindow'].document.close();

    return this.urlSafe;
  }

  createForm() {
    this.myForm = this.fb.group({
      templateName: ['', Validators.required],
      templateCode: ['', Validators.required],
      scenario: [''],
      providers: ['', Validators.required],
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
      if (result) {
        this.router.navigate(['/allTemplateData']);
        this.toastr.success<any>('Your Data Submited successfully!!');
      }
    });
  }

  reset() {
    this.myForm.reset();
  }

  seePreview(event: any) {
    this.preview = event.target.value;
  }

  selectedValue: any = '';

  onSelect(value: any) {
    this.selectedValue = value;
  }


  updateUser(data: any) {
    this.active.paramMap.subscribe((params) => {
      this.id = params.get('id');

      if (this.id) {
        this.FilterService.update(this.id, data).subscribe((result: any) => {
          if (result) {
            this.router.navigate(['/allTemplateData']);
            this.toastr.success<any>('Your Data Updated successfully!!');
          }
        });
      }
    });
  }

  // edit() {
  //   this.myForm.patchValue({
  //     templateName: this.form.myForm.value,
  //   });
  // }

}
