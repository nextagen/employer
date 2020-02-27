import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-employee-create",
  templateUrl: "./employee-create.component.html",
  styleUrls: ["./employee-create.component.css"]
})
export class EmployeeCreateComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  Offices: any = ["Riga", "Tallinn", "Vilnius"];

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {
    const id = this.paramId;
    if (id) {
      this.getEmployee(id);
    }
  }

  getEmployee(id) {
    this.apiService.getEmployee(id).subscribe(data => {
      this.employeeForm.setValue({
        name: data["name"],
        age: data["age"],
        office: data["office"],
        phone: data["phone"]
      });
    });
  }

  get paramId() {
    return this.route.snapshot.paramMap.get("id");
  }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ["", [Validators.required]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(70)]],
      office: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]+$")]]
    });
  }

  updateOffice(e) {
    this.employeeForm.get("office").setValue(e, {
      onlySelf: true
    });
  }

  get myForm() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      const id = this.paramId;
      if (id) {
        this.apiService.updateEmployee(id, this.employeeForm.value).subscribe(
          () => {
            this.ngZone.run(() => this.router.navigateByUrl("/employees-list"));
          },
          error => {
            console.log(error);
          }
        );
      } else {
        this.apiService.createEmployee(this.employeeForm.value).subscribe(
          () => {
            this.ngZone.run(() => this.router.navigateByUrl("/employees-list"));
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
}
