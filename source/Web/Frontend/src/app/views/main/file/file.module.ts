import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppFilesModule } from "src/app/components/files/files.module";
import { AppFileComponent } from "./file.component";

const routes: Routes = [
    { path: "", component: AppFileComponent }
];

@NgModule({
    declarations: [AppFileComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        AppFilesModule
    ]
})
export class AppFileModule { }
