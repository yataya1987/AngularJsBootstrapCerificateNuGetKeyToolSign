import { Component } from "@angular/core";
import { FileModel } from "src/app/models/file/file.model";

@Component({ selector: "app-file", templateUrl: "./file.component.html" })
export class AppFileComponent {
    files = new Array<FileModel>();
}
