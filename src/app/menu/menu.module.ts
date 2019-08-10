import {NgModule} from '@angular/core';

import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {MenuComponent} from "./menu.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
