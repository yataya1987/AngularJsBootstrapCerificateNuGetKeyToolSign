import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppLoginComponent } from "./login.component";

const routes: Routes = [
    { path: "", component: AppLoginComponent }
];

@NgModule({
    declarations: [AppLoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class AppLoginModule { }
