import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlStatusComponent } from './control-status.component';

const COMPONENTS = [ControlStatusComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class ControlStatusModule { }
