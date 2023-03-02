import { Component } from '@angular/core';
import {Employee} from "../employee.model";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {DatePipe, Location} from "@angular/common";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent{

  id: any;
  employee: Employee;
  date: Date;
  datePipe: DatePipe;
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private location: Location ) {
    this.datePipe = new DatePipe('en-US');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.id).subscribe((data => {this.employee = data}));
  }
  // ngOnInit(): void {
  //   this.date = new Date(this.employee.hireDate);
  // }

  onSubmit() {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      this.router.navigate(['/','employees']);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
