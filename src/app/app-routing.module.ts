import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EmployeeCreateComponent } from "./components/employee-create/employee-create.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { TagListComponent } from "./components/tag-list/tag-list.component";
import { TagCreateComponent } from "./components/tag-create/tag-create.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "employees-list" },
  { path: "create-employee", component: EmployeeCreateComponent },
  { path: "edit-employee/:id", component: EmployeeCreateComponent },
  { path: "employees-list", component: EmployeeListComponent },
  { path: "tag-list", component: TagListComponent },
  { path: "create-tag", component: TagCreateComponent },
  { path: "edit-tag/:id", component: TagCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
