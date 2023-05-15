import { KeyValue } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Input() formType: any = '';
  valuesInSelect = [];
  getlang: any;
  checkedValue: any;
  langObj: any = {};
  langArr: any = [];
  prevLangArr: any = ['English', 'Hindi', 'Marathi'];
  count: any = 0;

  constructor(
    private active: ActivatedRoute,
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
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
    // this.active.paramMap.subscribe((params) => {
    //   if (params.get('id')) {
    //     this.id = params.get('id');
    //     this.FilterService.getDataById(this.id).subscribe((result: any) => {
    //       this.htmlContent = result.data[0].body;
    //       this.langArr = result.data[0].lang;
    //       const iframe = document.getElementById('preview_iframe_5');
    //       iframe['contentWindow'].document.open();
    //       iframe['contentDocument'].write(this.htmlContent);
    //       iframe['contentWindow'].document.close();
    //       if (this.id) {
    //         this.myForm.patchValue({
    //           templateName: result.data[0].templateName,
    //           templateCode: result.data[0].templateCode,
    //           scenario: result.data[0].scenario,
    //           providers: result.data[0].providers,
    //           user: result.data[0].user,
    //           tier: result.data[0].tier,
    //           emailType: result.data[0].emailType,
    //           activity: result.data[0].activity,
    //           status: result.data[0].status,
    //           targetAudience: result.data[0].targetAudience,
    //           subject: result.data[0].subject,
    //           body: result.data[0].body,
    //           lang: result.data[0].lang,
    //         });

    //       }
    //     });
    //   }
    // });

    this.active.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.id = params.get('id');

        this.FilterService.getDataById(this.id).subscribe((result: any) => {
          this.htmlContent = result.data[0].body;
          const iframe = document.getElementById('preview_iframe_5');
          iframe['contentWindow'].document.open();
          iframe['contentDocument'].write(this.htmlContent);
          iframe['contentWindow'].document.close();
          if (this.id) {
            result.data[0].lang.forEach((element: any) => {
              this.langObj = {};
              this.langObj.item_id = this.prevLangArr.indexOf(element) + 1;
              this.langObj.item_text = element;
              this.langArr.push(this.langObj);
            });
            this.myForm.patchValue({
              templateName: result.data[0].templateName,
              templateCode: result.data[0].templateCode,
              scenario: result.data[0].scenario,
              providers: result.data[0].providers,
              tier: result.data[0].tier,
              emailType: result.data[0].emailType,
              activity: result.data[0].activity,
              status: result.data[0].status,
              targetAudience: result.data[0].targetAudience,
              // subject: result.data[0].subject,
              // body: result.data[0].body,
              // lang: [{item_text:"English"}],
              lang: this.langArr,
            });
          }
        });
      }
    });

    //   if(this.router.url === '/createEmailTemplate')
    //   this.formType = true
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
      lang: [''],
      insideMail: this.fb.array([]),
    });
  }

  submit(data: any) {
    console.log('data issssss', data);

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
      console.log('data.....', data);
      this.formService.submitForm(data).subscribe((result: any) => {
        if (result) {
          console.log(result.data.templateCode);

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
    this.addInsideMail(items.item_id);

    console.log('hiiiiii', items);
    if (this.langArr.includes(items.item_text)) {
      console.log('langArr', this.langArr);
    } else {
      this.langArr.push(items.item_text);
      console.log('langArr', this.langArr);
    }
    this.langArr.forEach((element: any, i: any) => {
      this.valuesInSelect.push({ item_id: i, item_text: element });
    });
  }
  removeItem(items: any) {
    console.log('hello', items);
    let index = this.langArr.indexOf(items.item_text);
    console.log('index----------------------------', index);

    this.langArr.splice(index, 1);

    console.log('langArr to remove', this.langArr);
    this.removeInsideMail(items, index + 1);
  }
  onSelectAll(items: any) {
    console.log('items are', items);

    this.langArr = [];
    items.forEach((element: any) => {
      this.langArr.push(element?.item_text);
      this.addInsideMail(items.item_id);
    });
    console.log('langarr after select all is', this.langArr);
  }
  onDeselect() {
    this.langArr = [];
  }
  // addMails() {
  //   let mills = this.myForm.controls.insideMail as FormArray;
  //   mills.push(
  //     this.fb.group({
  //       subject: '',
  //       body: '',
  //     })
  //   );
  // }
  insideMail(): FormArray {
    return this.myForm.get('insideMail') as FormArray;
  }
  newInsideMail(id: any): FormGroup {
    this.count += id;
    return this.fb.group({
      subject: '',
      body: '',
      mailId: id,
    });
  }
  addInsideMail(id: any) {
    this.insideMail().push(this.newInsideMail(id));
  }
  removeInsideMail(empIndex: number, index: number) {
    console.log('empIndex=========>>>>>>>>>>>', empIndex);
    console.log('index=========>>>>>>>>>>>', index);
    console.log('this.insideMail()==>>', this.insideMail());

    this.insideMail().removeAt(index);
  }

  // updateUser(data: any) {
  //   this.active.paramMap.subscribe((params) => {
  //     this.id = params.get('id');

  //     if (this.id) {
  //       this.FilterService.update(this.id, data).subscribe((result: any) => {
  //         if (result) {
  //           this.router.navigate(['/allTemplateData']);
  //           this.toastr.success<any>('Your Data Updated successfully!!');
  //         }
  //       });
  //     }
  //   });
  // }

  // edit() {
  //   this.myForm.patchValue({
  //     templateName: this.form.myForm.value,
  //   });
  // }
}
