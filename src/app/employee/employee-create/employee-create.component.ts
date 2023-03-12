import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../employee.model";
import {EmployeeService} from "../../services/employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employee: Employee;
  employeeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private location: Location) {
    this.employee = new Employee(0, '','','','',new Date());
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
       ]),
      lastName: new FormControl(this.employee.lastName, [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new FormControl(this.employee.email, [
        Validators.required,
        Validators.email
      ]),
      phonenumber: new FormControl(this.employee.phonenumber, [
        Validators.required,
        Validators.pattern('([0-9]{10,15})')
      ])
    });
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
