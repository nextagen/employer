import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];

  constructor(private apiService: ApiService) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee() {
    this.apiService.getEmployees().subscribe(data => {
      this.Employee = data;
    });
  }

  removeEmployee(employee, index) {
    if (window.confirm(`Are you sure you want to delete employee #${index + 1} ”${employee.name}“`)) {
      this.apiService.deleteEmployee(employee._id).subscribe(() => {
        this.Employee.splice(index, 1);
      });
    }
  }
}
