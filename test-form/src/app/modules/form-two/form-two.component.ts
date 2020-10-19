import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two-component',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
})
export class FormTwoComponent {
  formGroup: FormGroup;

  public get isGreaterThan2(): boolean {
    return this.formGroup.controls.fieldTwo.value > 2;
  }

  get formStatus(): string {
    return `form two valid=${this.formGroup.valid} dirty=${this.formGroup.dirty} touched=${this.formGroup.touched} pending=${this.formGroup.pending}`;
  }

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      fieldTwo: this.formBuilder.control(null, [Validators.required]),
      childTwo: this.formBuilder.group({}),
    });
  }

  onSubmit() {
    console.log(this.formGroup);
    this.formGroup.markAllAsTouched();
  }
}
