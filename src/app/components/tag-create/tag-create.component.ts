import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-tag-create",
  templateUrl: "./tag-create.component.html",
  styleUrls: ["./tag-create.component.css"]
})
export class TagCreateComponent implements OnInit {
  submitted = false;
  tagForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {
    const id = this.paramId;
    if (id) {
      this.getTag(id);
    }
  }

  getTag(id) {
    this.apiService.getTag(id).subscribe(data => {
      this.tagForm.setValue({
        name: data["name"]
      });
    });
  }

  mainForm() {
    this.tagForm = this.fb.group({
      name: ["", [Validators.required]]
    });
  }

  get myForm() {
    return this.tagForm.controls;
  }

  get paramId() {
    return this.route.snapshot.paramMap.get("id");
  }

  onSubmit() {
    this.submitted = true;
    if (!this.tagForm.valid) {
      return false;
    } else {
      const id = this.paramId;
      if (id) {
        this.apiService.updateTag(id, this.tagForm.value).subscribe(
          () => {
            this.ngZone.run(() => this.router.navigateByUrl("/tag-list"));
          },
          error => {
            console.log(error);
          }
        );
      } else {
        this.apiService.createTag(this.tagForm.value).subscribe(
          () => {
            this.ngZone.run(() => this.router.navigateByUrl("/tag-list"));
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
}
