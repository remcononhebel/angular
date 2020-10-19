import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlStatusModule } from "src/app/shared/control-status/control-status.module";
import { ChildTwoChildComponent } from "./child-two-child.component";

const COMPONENTS = [ChildTwoChildComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, ControlStatusModule],
})
export class ChildTwoChildModule {}
