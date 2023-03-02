import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../employee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employee: Employee;

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private location: Location) {
    this.employee = new Employee(0, '','','','',new Date());
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
