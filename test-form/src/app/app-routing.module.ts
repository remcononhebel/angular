import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormOneComponent } from "./modules/form-one/form-one.component";
import { FormTwoComponent } from "./modules/form-two/form-two.component";
import { AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: "form1",
    component: FormOneComponent,
  },
  {
    path: "form2",
    component: FormTwoComponent,
  },
  { path: "", component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
