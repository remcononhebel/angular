import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  @Input() formGroup: FormGroup;

  @Output() formGroupCreated = new EventEmitter<FormGroup>();

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl('childTwoField', this.formBuilder.control(null, [Validators.required]));
    this.formGroup.addControl('childTwoChild', this.formBuilder.group({}));
  }
}
