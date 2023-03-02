import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeDetailComponent} from "./employee/employee-detail/employee-detail.component";
import {EmployeeCreateComponent} from "./employee/employee-create/employee-create.component";
import {EmployeeEditComponent} from "./employee/employee-edit/employee-edit.component";
import {EmployeeModule} from "./modules/employee.module";

const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeDetailComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: '**', redirectTo: 'employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeModule],
  exports: [RouterModule]
})
export class AppRoutingModule{}
