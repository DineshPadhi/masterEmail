import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { Router } from '@angular/router';
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
  url: string = 'https://www.abplive.com/';
  urlSafe: SafeResourceUrl;
  htmlContent: string = '<p>hello</p>';

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router,
    public sanitizer: DomSanitizer
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'User 1' },
      { item_id: 2, item_text: 'User 2' },
      { item_id: 3, item_text: 'User 3' },
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
  }
  safehtmlinput($event: any) {
    this.htmlContent = $event.target.value;
    this.urlSafe = this.sanitizer.bypassSecurityTrustHtml(this.htmlContent);
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
      console.log('result========>>>>>>>>', result.data);
      // localStorage.setItem('submit', JSON.stringify(result))
      if (result) {
        this.router.navigate(['/allTemplateData']);
        console.log('result====', result);
      }
    });
  }

  // previewData(){
  //   this.myForm.patchValue({
  //     templateName : this.myForm.get('templateName').value

  //   })
  // }

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

  selectedValue: any = '';
  // error:any

  onSelect(value: any) {
    // this.selectedValue = document.getElementById('inp');
    this.selectedValue = value;
  }

  title: 'hello world';
}
