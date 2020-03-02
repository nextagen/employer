import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { EmployeeCreateComponent } from "./components/employee-create/employee-create.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { TagListComponent } from "./components/tag-list/tag-list.component";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "./service/api.service";
import { TagCreateComponent } from "./components/tag-create/tag-create.component";

import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    TagListComponent,
    TagCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
