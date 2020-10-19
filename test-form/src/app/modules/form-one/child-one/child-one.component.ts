import { Component, forwardRef, Input, OnInit } from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from "@angular/forms";
import { Subject } from "rxjs";

@Component({
  selector: "app-child-one",
  templateUrl: "./child-one.component.html",
  styleUrls: ["./child-one.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChildOneComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ChildOneComponent,
      multi: true,
    },
  ],
})
export class ChildOneComponent implements OnInit, ControlValueAccessor, Validator {
  formGroup: FormGroup;
  
  @Input() submitted: Subject<void>;

  public onTouched: () => void = () => {};
  public onChanged: (value: any) => void = () => {};

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      childOneField: new FormControl(null, [Validators.required]),
      childOneChild: new FormControl(null, [Validators.required]),
    });

    this.formGroup.valueChanges.subscribe((value: any) => {
      this.onChanged(value);
      this.onTouched();
    });
  }

  ngOnInit(): void {
    this.submitted.subscribe(() => {
      this.formGroup.markAllAsTouched();
      this.onTouched();
    });
  }

  writeValue(val: any): void {
    val && this.formGroup.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

  validate(control: AbstractControl): ValidationErrors {
    return this.formGroup.valid
      ? null
      : {
          invalidForm: { valid: false, message: "Child 1 fields are invalid" },
        };
  }
}
