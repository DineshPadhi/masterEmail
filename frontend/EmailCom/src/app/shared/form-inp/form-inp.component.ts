import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { FilterService } from 'src/app/filter/filter.service';
import { FormServiceService } from 'src/app/home/form-service.service';

@Component({
  selector: 'app-form-inp',
  templateUrl: './form-inp.component.html',
  styleUrls: ['./form-inp.component.css'],
})
export class FormInpComponent {
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
  langArr: any = [];
  @Input() formType: any = '';
  valuesInSelect = [];

  constructor(
    private active: ActivatedRoute,
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router,
    private toastr: ToastrService,
    public sanitizer: DomSanitizer,
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
      if (params.get('id')) {
        this.id = params.get('id');
        this.FilterService.getDataById(this.id).subscribe((result: any) => {
          this.htmlContent = result.data[0].body;
          this.langArr = result.data[0].lang;
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


  }

  safehtmlinput($event: any, item: any) {
    this.htmlContent = $event.target.value;
    const iframe = document.getElementById('preview_iframe_5' + item);
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
    if (this.formType == 'edit') {
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
    } else {
      this.formService.submitForm(data).subscribe((result: any) => {
        if (result) {
          this.router.navigate(['/allTemplateData']);
          this.toastr.success<any>('Your Data Submited successfully!!');
        }
      });
    }
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
  onItemSelect(items: any) {
    this.langArr.forEach((element: any, i: any) => {
      this.valuesInSelect.push({ item_id: i, item_text: element });
    });

    console.log('hiiiiii', items);
    if (this.langArr.includes(items.item_text)) {
      console.log('langArr', this.langArr);
    } else {
      this.langArr.push(items.item_text);
      console.log('langArr', this.langArr);
    }
  }
  removeItem(items: any) {
    console.log('hello', items);
    let index = this.langArr.indexOf(items);
    this.langArr.splice(index, 1);

    console.log('langArr to remove', this.langArr);
  }
  onSelectAll(items: any) {
    this.langArr = [];
    items.forEach((element: any) => {
      this.langArr.push(element.item_text);
    });
    console.log('langarr after select all is', this.langArr);
  }
  onDeselect() {
    this.langArr = [];
  }
}
