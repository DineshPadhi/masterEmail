import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './searchFilter/filter.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FilterService } from './filter.service';
import { HomeModule } from '../home/home.module'
import { HttpClientModule } from '@angular/common/http';
import { FormServiceService } from '../home/form-service.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




@NgModule({
  declarations: [
    FilterComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    HttpClientModule,
    NgMultiSelectDropDownModule
    
  ],
  providers: [
    FilterComponent,
    UpdateUserComponent
  ],
  exports: [
    HttpClientModule,
    FilterComponent,
    UpdateUserComponent
  ]
})
export class FilterModule { }
