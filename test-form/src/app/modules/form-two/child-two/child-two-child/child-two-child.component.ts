import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-two-child',
  templateUrl: './child-two-child.component.html',
  styleUrls: ['./child-two-child.component.scss']
})
export class ChildTwoChildComponent implements OnInit {
  @Input() formGroup: FormGroup;  
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl('field', this.formBuilder.control(null, [Validators.required]))
  }
}
