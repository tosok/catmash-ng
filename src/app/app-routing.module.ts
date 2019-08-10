import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatListComponent} from "./cat/cat-list.component";
import {CatChooseComponent} from "./cat/cat-choose.component";


const routes: Routes = [
  { path: 'choose', component: CatChooseComponent },
  { path: 'results', component: CatListComponent },
  { path: '', redirectTo: '/choose', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
