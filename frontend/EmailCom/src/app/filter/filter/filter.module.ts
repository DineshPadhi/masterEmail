import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { FilterService } from './filter.service';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    FilterService
  ]
})
export class FilterModule { }
