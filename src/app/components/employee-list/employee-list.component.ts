import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ["name", "age", "office", "phone", "tags", "actions"];
  dataSource: MatTableDataSource<any>;

  constructor(private apiService: ApiService) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee() {
    this.apiService.getEmployees().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data as any);
    });
  }

  removeEmployee(employee) {
    if (
      window.confirm(
        `Are you sure you want to delete employee ”${employee.name}“`
      )
    ) {
      this.apiService.deleteEmployee(employee._id).subscribe(() => {
        this.readEmployee();
      });
    }
  }
}
