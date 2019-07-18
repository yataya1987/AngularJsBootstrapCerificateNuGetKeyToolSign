import { Routes } from "@angular/router";
import { AppRouteGuard } from "./core/guards/route.guard";
import { AppLayoutMainComponent } from "./layouts/layout-main/layout-main.component";
import { AppLayoutComponent } from "./layouts/layout/layout.component";
import { AppLoginComponent } from "./views/login/login.component";

export const routes: Routes = [
    {
        path: "",
        component: AppLayoutComponent,
        children: [
            { path: "", component: AppLoginComponent }
        ]
    },
    {
        path: "main",
        component: AppLayoutMainComponent,
        canActivate: [AppRouteGuard],
        children: [
            { path: "file", loadChildren: () => import("./views/main/file/file.module").then((result) => result.AppFileModule) },
            { path: "form", loadChildren: () => import("./views/main/form/form.module").then((result) => result.AppFormModule) },
            { path: "home", loadChildren: () => import("./views/main/home/home.module").then((result) => result.AppHomeModule) },
            { path: "list", loadChildren: () => import("./views/main/list/list.module").then((result) => result.AppListModule) },
            { path: "rxjs", loadChildren: () => import("./views/main/rxjs/rxjs.module").then((result) => result.AppRxjsModule) }
        ]
    },
    { path: "**", redirectTo: "" }
];
