import { Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AppBaseComponent } from "../base/base.component";
import { OptionModel } from "./option.model";

export abstract class AppSelectComponent extends AppBaseComponent<any> implements OnInit {
    @Input() child!: AppSelectComponent;

    options = new Array<OptionModel>();

    abstract getOptions(filter?: string): Observable<OptionModel[]>;

    ngOnInit(): void {
        this.load();
    }

    clearOptions() {
        this.options = new Array<OptionModel>();
    }

    change() {
        if (!this.child) {
            return;
        }

        let child = this.child;

        while (child) {
            child.clearOptions();
            child.ngModel = null;
            child = child.child;
        }

        this.child.load(this.ngModel);
    }

    load(filter?: string) {
        this.getOptions(filter).subscribe((options: OptionModel[]) => {
            this.options = options;
        });
    }

    writeValueChanged(value: any): void {
        if (!this.child) {
            return;
        }

        this.child.load(value);
    }
}
