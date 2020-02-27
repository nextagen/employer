import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

@Component({
  selector: "app-tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.css"]
})
export class TagListComponent implements OnInit {
  Tag: any = [];

  constructor(private apiService: ApiService) {
    this.readTag();
  }

  ngOnInit() {}

  readTag() {
    this.apiService.getTags().subscribe(data => {
      this.Tag = data;
    });
  }

  removeTag(tag, index) {
    if (window.confirm("Are you sure?")) {
      this.apiService.deleteTag(tag._id).subscribe(() => {
        this.Tag.splice(index, 1);
      });
    }
  }
}
