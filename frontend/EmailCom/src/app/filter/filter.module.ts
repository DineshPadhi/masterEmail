import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './searchFilter/filter.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeModule } from '../home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [FilterComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HomeModule,
    HttpClientModule,
    NgMultiSelectDropDownModule
    
  ],
  providers: [
    FilterComponent,
    UpdateUserComponent,
    ToastrService
  ],
  exports: [
    HttpClientModule,
    FilterComponent,
    UpdateUserComponent
  ],
})
export class FilterModule {}
