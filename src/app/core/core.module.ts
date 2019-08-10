import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {LoaderComponent} from "./loader.component";

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class CoreModule { }
