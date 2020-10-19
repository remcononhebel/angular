import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlStatusModule } from "../../shared/control-status/control-status.module";
import { ChildOneModule } from "./child-one/child-one.module";
import { FormOneComponent } from "./form-one.component";

const COMPONENTS = [FormOneComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ChildOneModule,
    ReactiveFormsModule,
    ControlStatusModule,
  ],
})
export class FormOneModule {}
