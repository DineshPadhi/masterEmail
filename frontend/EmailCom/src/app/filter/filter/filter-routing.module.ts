import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

const routes: Routes = [ {
   path:'',
component: FilterComponent
},
{
   path:':id',
   component: UpdateUserComponent
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FilterRoutingModule { }
