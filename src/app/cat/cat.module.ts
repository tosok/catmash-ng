import {NgModule} from '@angular/core';
import {CatListComponent} from "./cat-list.component";
import {CatChooseComponent} from "./cat-choose.component";
import {MatCardModule, MatGridListModule, MatProgressSpinnerModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "../core/core.module";
import {MenuModule} from "../menu/menu.module";

@NgModule({
  declarations: [
    CatListComponent,
    CatChooseComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MenuModule,
    CoreModule
  ],
  exports: [
    CatListComponent,
    CatChooseComponent
  ]
})
export class CatModule { }
