import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-one-component',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss'],
})
export class FormOneComponent {
  formGroup: FormGroup;

  public submitted = new Subject<void>();

  public get isGreaterThan2(): boolean {
    return this.formGroup && this.formGroup.controls.fieldOne.value > 2;
  }

  get formStatus(): string {
    return `form one - valid=${this.formGroup.valid} dirty=${this.formGroup.dirty} touched=${this.formGroup.touched} pending=${this.formGroup.pending}`;
  }

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      fieldOne: this.formBuilder.control(null, [Validators.required]),
      childOne: this.formBuilder.control(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log('submitting form', this.formGroup);

    this.submitted.next();
    this.formGroup.markAllAsTouched();
  }
}
