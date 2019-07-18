import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppSelectCityModule } from "src/app/components/select-city/select-city.module";
import { AppSelectCountryModule } from "src/app/components/select-country/select-country.module";
import { AppSelectStateModule } from "src/app/components/select-state/select-state.module";
import { AppFormComponent } from "./form.component";

const routes: Routes = [
    { path: "", component: AppFormComponent }
];

@NgModule({
    declarations: [AppFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        AppSelectCountryModule,
        AppSelectStateModule,
        AppSelectCityModule
    ]
})
export class AppFormModule { }
