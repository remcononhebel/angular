import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { ControlStatusModule } from 'src/app/shared/control-status/control-status.module';
import { ChildTwoModule } from './child-two/child-two.module';
import { FormTwoComponent } from "./form-two.component";

const COMPONENTS = [FormTwoComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, ControlStatusModule, ChildTwoModule],
})
export class FormTwoModule {}
