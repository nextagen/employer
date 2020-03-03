import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { EmployeeCreateComponent } from "./components/employee-create/employee-create.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { TagListComponent } from "./components/tag-list/tag-list.component";

import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "./service/api.service";
import { TagCreateComponent } from "./components/tag-create/tag-create.component";

import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgxMaskModule } from "ngx-mask";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AutofocusDirective } from "./autofocus.derective";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    TagListComponent,
    TagCreateComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    NoopAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
