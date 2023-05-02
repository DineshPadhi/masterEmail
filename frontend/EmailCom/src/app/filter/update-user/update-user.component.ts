import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../filter/filter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  myForm: FormGroup;
  id:any

constructor(private active: ActivatedRoute, private fb: FormBuilder, private FilterService: FilterService, private router: Router) {
  this.createForm()
  console.log('id====',this.myForm.value)
}


ngOnInit(): void {
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


selectedValue:any = ''
// error:any

onSelect(value:any){
  // this.selectedValue = document.getElementById('inp');
  this.selectedValue = value
}


updateUser(data:any){

  // console.log('updatedata===', data);
  

  this.active.paramMap.subscribe((params)=>{
    this.id = params.get('id')
    if(this.id){
      this.FilterService.update(this.id, data).subscribe((result:any)=>{
        if(result){
          this.router.navigate(['/allTemplateData'])
          console.log('result......', result)
        }
      })
    }
  })

}

}
