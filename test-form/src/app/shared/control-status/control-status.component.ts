import { Component, Input, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-control-status',
  templateUrl: './control-status.component.html',
  styleUrls: ['./control-status.component.scss']
})
export class ControlStatusComponent {
  @Input() control: AbstractControl;
}
