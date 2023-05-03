import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../filter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from 'src/app/home/form/form.component';
import { FormServiceService } from 'src/app/home/form-service.service';
import { FilterComponent } from '../searchFilter/filter.component';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {

  @ViewChild('iframe') preview_iframe: ElementRef;

  myForm: FormGroup;
  id: any;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  data: any;
  urlSafe: SafeResourceUrl;
  htmlContent: string = '';

  // patch: FilterComponent

constructor(private active: ActivatedRoute, private fb: FormBuilder, private FilterService: FilterService, private router: Router, private form:FormComponent, private sanitizer:DomSanitizer) {

  // this.active.paramMap.subscribe((params)=>{
  //   this.id = params.get('id')
    
  //   if(this.id){
  //     this.myForm.patchValue({
  //       templateName: this.filter.preData.templateName,
  //       status: 'Active'

    //      })
    //     //  this.createForm()
    //   }
    // })

    // this.active.paramMap.subscribe((params:any)=>{
    //   this.id = params.get('id')
    //   if(this.id){
    //     this.FilterService.getDataById(this.id).subscribe((result:any)=>{
    //       console.log('result.......======',result.data[0].templateName);
    //       if(result){
    //         this.myForm.patchValue({
    //           templateName: result.data[0].templateName
    //         })
    //         this.createForm()
    //       }

    //     })
    //   }
    // })

    this.createForm();

    // console.log('id====',this.myForm.value)
  }

  ngOnInit(): void {
    // console.log('patch======', this.patch.myForm.value.templateName)

    //     let user:any = localStorage.getItem('submit')
    // console.log('user====.......', user)
    //   this.data = JSON.parse(user)
    //   this.data = this.data.data
    //   console.log('data====.......', this.data)

    // console.log(this.form.myForm.value)
    // this.form.previewData()
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'User 1' },
    //   { item_id: 2, item_text: 'User 2' },
    //   { item_id: 3, item_text: 'User 3' },
    // ];


 


  this.dropdownList = [
    { item_id: 1, item_text: 'User 1' },
    { item_id: 2, item_text: 'User 2' },
    { item_id: 3, item_text: 'User 3' }
  ];
  this.dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
  };


    this.active.paramMap.subscribe((params) => {
      this.id = params.get('id');

      this.FilterService.getDataById(this.id).subscribe((result: any) => {
        this.htmlContent = result.data[0].body;
        const iframe = document.getElementById('preview_iframe_5');
        iframe['contentWindow'].document.open();
        iframe['contentDocument'].write(this.htmlContent);
        iframe['contentWindow'].document.close();
        //
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
          });
        }
      });
    });
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

  preview: any;

  seePreview(event: any) {
    this.preview = event.target.value;

    // console.log(this.preview);
  }

  reset() {
    this.myForm.reset();
  }

  selectedValue: any = '';
  // error:any

  onSelect(value: any) {
    // this.selectedValue = document.getElementById('inp');
    this.selectedValue = value;
  }

  updateUser(data: any) {
    // console.log('updatedata===', data);

    this.active.paramMap.subscribe((params) => {
      this.id = params.get('id');

      if (this.id) {
        // this.myForm.patchValue({
        //   templateName: this.form.myForm.value

        //  })

        this.FilterService.update(this.id, data).subscribe((result: any) => {
          if (result) {
            this.router.navigate(['/allTemplateData']);
            console.log('result......', result);
          }
        });
      }
    });
  }
  safehtmlinput($event: any) {
    this.htmlContent = $event.target.value;
    // this.urlSafe = this.sanitizer.bypassSecurityTrustHtml(this.htmlContent);
    const iframe = document.getElementById('preview_iframe_5');
    iframe['contentWindow'].document.open();
    iframe['contentDocument'].write(this.htmlContent);
    iframe['contentWindow'].document.close();
  }

  edit() {
    this.myForm.patchValue({
      templateName: this.form.myForm.value,
    });
  }

  // preData:any

  // getById(){

  //   this.active.paramMap.subscribe((params:any)=>{
  //     this.id = params.get('id')
  //     if(this.id){
  //       this.FilterService.getDataById(this.id).subscribe((result:any)=>{
  //         console.log('result.......======',result);
  //         this.preData = result
  //       })
  //     }
  //   })

  // }
}
