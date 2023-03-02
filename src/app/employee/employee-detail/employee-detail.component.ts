import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {EmployeeService} from "../../services/employee.service";
import {DatePipe, Location} from '@angular/common';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: any;
  employee: any;
  date: Date;
  datePipe: DatePipe;

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private location: Location) {
    this.datePipe = new DatePipe('en-US');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.id).subscribe((data => {this.employee = data}));

  }

  ngOnInit(): void {
    this.date = new Date(this.employee.hireDate);
  }

  goBack(): void {
    this.location.back();
  }
}
