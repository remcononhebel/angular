import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormOneModule } from "./modules/form-one/form-one.module";
import { FormTwoModule } from "./modules/form-two/form-two.module";
@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, FormOneModule, FormTwoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
