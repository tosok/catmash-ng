import {Component} from '@angular/core';
import {CatService} from "./cat.service";
import {Cat} from "./cat.interface";

@Component({
  selector: 'ng-catmash-list',
  styleUrls: ['./cat-list.component.sass'],
  templateUrl: './cat-list.component.html'
})
export class CatListComponent {
  cats: Cat[] = [];
  loading:boolean = true;

  constructor(private catService: CatService) {
    this.loadCats();
  }

  loadCats() {
    this.loading = true;
    this.catService.getCats().subscribe((results: Cat[]) => {
      this.cats = results;
      this.loading = false;
    });
  }
}
