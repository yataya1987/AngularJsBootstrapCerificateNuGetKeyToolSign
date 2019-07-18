import { Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

export abstract class AppBaseComponent<TModel> implements ControlValueAccessor {
    @Input() disabled!: boolean;
    @Input() name!: string;
    @Input() required!: boolean;

    private changed = new Array<(model: TModel) => void>();
    private touched = new Array<() => void>();
    private model!: TModel;

    abstract writeValueChanged(model: TModel): void;

    get ngModel(): TModel {
        return this.model;
    }

    set ngModel(model: TModel) {
        if (this.model === model) { return; }
        this.model = model;
        this.changed.forEach((fn) => fn(model));
    }

    registerOnChange(fn: (model: TModel) => void) {
        this.changed.push(fn);
    }

    registerOnTouched(fn: () => void) {
        this.touched.push(fn);
    }

    writeValue(model: TModel) {
        this.writeValueChanged(model);
        this.model = model;
    }
}
