import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlStatusModule } from "src/app/shared/control-status/control-status.module";
import { ChildOneChildComponent } from "./child-one-child.component";

const COMPONENTS = [ChildOneChildComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, ControlStatusModule],
})
export class ChildOneChildModule {}
