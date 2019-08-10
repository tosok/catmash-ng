import {NgModule} from '@angular/core';
import {HomeModule} from "./home/home.module";
import {HomeComponent} from "./home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
