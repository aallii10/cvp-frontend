import {EmployeeCreateComponent} from "../employee/employee-create/employee-create.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {EmployeeDetailComponent} from "../employee/employee-detail/employee-detail.component";
import {NgModule} from "@angular/core";
import {EmployeeListComponent} from "../employee/employee-list/employee-list.component";
import {EmployeeEditComponent} from "../employee/employee-edit/employee-edit.component";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'employees', component: EmployeeListComponent},
      {path: 'employee/:id', component: EmployeeDetailComponent},
      {path: 'employee-edit/:id', component: EmployeeEditComponent},
      {path: 'employee-create', component: EmployeeCreateComponent}
    ])
  ],
  providers: []
})
export class EmployeeModule { }
