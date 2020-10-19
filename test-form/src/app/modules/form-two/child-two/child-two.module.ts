import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildTwoComponent } from './child-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlStatusModule } from 'src/app/shared/control-status/control-status.module';
import { ChildTwoChildModule } from './child-two-child/child-two-child.module';

const COMPONENTS = [ChildTwoComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlStatusModule,
    ChildTwoChildModule
  ]
})
export class ChildTwoModule { }
