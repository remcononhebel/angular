import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlStatusModule } from '../../../shared/control-status/control-status.module';
import { ChildOneChildModule } from './child-one-child/child-one-child.module';
import { ChildOneComponent } from './child-one.component';

const COMPONENTS = [ChildOneComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    ChildOneChildModule,
    CommonModule,
    ControlStatusModule,
    ReactiveFormsModule,
  ],
})
export class ChildOneModule {}
