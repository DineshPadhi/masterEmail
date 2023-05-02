import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../filter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from 'src/app/home/form/form.component';
import { FormServiceService } from 'src/app/home/form-service.service';





@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  myForm: FormGroup;
  id:any
  data:any
  // patch: FilterComponent

constructor(private active: ActivatedRoute, private fb: FormBuilder, private FilterService: FilterService, private router: Router, private form:FormComponent) {
  this.createForm()
  // console.log('id====',this.myForm.value)
}


ngOnInit(): void {
 
  // console.log('patch======', this.patch.myForm.value.templateName)

  //     let user:any = localStorage.getItem('submit')
  // console.log('user====.......', user)
  //   this.data = JSON.parse(user)
  //   this.data = this.data.data
  //   console.log('data====.......', this.data)

  console.log(this.form.myForm.value)
  // this.form.previewData()


  this.active.paramMap.subscribe((params)=>{
    this.id = params.get('id')
    
    if(this.id){
      this.myForm.patchValue({
        templateName: this.form.data.templateName,
        status: 'Active'
        
       })
    }
  })


  
  
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

      // this.myForm.patchValue({
      //   templateName: this.form.myForm.value
        
      //  })
      
      this.FilterService.update(this.id, data).subscribe((result:any)=>{
        if(result){
          this.router.navigate(['/allTemplateData'])
          // console.log('result......', result)
          
        }
      })
    }
  })



}


edit(){
   this.myForm.patchValue({
    templateName: this.form.myForm.value
    
   })
   
}


}
