import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {MenuModule} from "../menu/menu.module";
import {CatModule} from "../cat/cat.module";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    MenuModule,
    CatModule
  ]
})
export class HomeModule { }
