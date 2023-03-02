import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any = [];
  router: Router;
  isEditing = false;

  constructor(private employeeService: EmployeeService, private route: Router) {
    this.router = route;
  }

  ngOnInit() {
    this.isEditing = false;
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data
    });
  }
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe((data: any) => {
        this.employees = data;
      });
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.getEmployees());
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
}
