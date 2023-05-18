import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInpComponent } from './form-inp/form-inp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';



@NgModule({
  declarations: [
    FormInpComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ ToastrService, FormInpComponent],
  exports:[
    FormInpComponent,
  ]
})
export class SharedModule { }
