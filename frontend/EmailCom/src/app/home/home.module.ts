import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { SendMailComponent } from './form/send-mail/send-mail.component';


@NgModule({
  declarations: [
    FormComponent,
    SendMailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    SharedModule
  ],
  providers: [
    FormComponent,
    ToastrService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormComponent,
    HttpClientModule
  ],
 
})
export class HomeModule { }
