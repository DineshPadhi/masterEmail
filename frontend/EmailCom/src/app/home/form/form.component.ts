import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/filter/filter.service';
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
  dropdownUser:IDropdownSettings={};
  userArry:any = []
  getData:any=''


  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router,
    private toastr:ToastrService,
    public sanitizer: DomSanitizer
  ) {
    this.createForm();
  }

  ngOnInit(): void {



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
      { item_id: 3, item_text: 'Marathi' }
    ];

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    }

    // console.log(this.dropdownList[0].item_text);

    // this.dropdownList.map((result:any)=>{
    //   this.getData = result.item_text
    //   console.log('getData====',this.getData)
    // })
  }

  safehtmlinput($event: any) {
    this.htmlContent = $event.target.value;
    // this.urlSafe = this.sanitizer.bypassSecurityTrustHtml(this.htmlContent);
    const iframe = document.getElementById('preview_iframe_5');
    iframe['contentWindow'].document.open();
    iframe['contentDocument'].write(this.htmlContent);
    iframe['contentWindow'].document.close();

    return this.urlSafe;
  }


 


  // select(value:any){
  //   value.map((result:any)=>{
  //     if(result.item_id){
  //     this.userArry.push(result.item_text)
  //     console.log('userArry====',this.userArry)
  //     }
  //   })
  //   // this.userArry.push(value)
  //   // console.log('getData====',this.userArry)
  //   // this.userArry = value
  //   // console.log('getData====',this.userArry)

  // }



  

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
      lang: ['']
    });
  }

  submit(data: any) {
    this.formService.submitForm(data).subscribe((result: any) => {
      console.log('result========>>>>>>>>', result.data);
      // localStorage.setItem('submit', JSON.stringify(result))
      // this.toastr.success<any>('Your Data Submited successfully!!')
      if (result) {
        this.router.navigate(['/allTemplateData']);
        console.log('result====', result);
            this.toastr.success<any>('Your Data Submited successfully!!')

        
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

  // title: 'hello world';


}
