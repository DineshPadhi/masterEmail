import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormServiceService } from './form-service.service';
import { FilterService } from '../filter/filter.service';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FormComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormComponent,
    HttpClientModule
  ],
 
})
export class HomeModule { }
