import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.css"]
})
export class TagListComponent implements OnInit {
  displayedColumns: string[] = ["name", "actions"];
  dataSource: MatTableDataSource<any>;

  constructor(private apiService: ApiService) {
    this.readTag();
  }

  ngOnInit() {}

  readTag() {
    this.apiService.getTags().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data as any);
    });
  }

  removeTag(tag) {
    if (window.confirm(`Are you sure you want to delete tag "${tag.name}"?`)) {
      this.apiService.deleteTag(tag._id).subscribe(() => {
        this.readTag();
      });
    }
  }
}
