import {Component} from '@angular/core';
import {CatService} from "./cat.service";
import {Cat} from "./cat.interface";


@Component({
  selector: 'ng-catmash-choose',
  styleUrls: ['./cat-choose.component.sass'],
  templateUrl: './cat-choose.component.html'
})
export class CatChooseComponent {
  cats: Cat[] = [];
  loading:boolean = true;

  constructor(private catService: CatService) {
    this.loadRandomCats();
  }

  loadRandomCats() {
    this.loading = true;
    this.catService.getRandomCats().subscribe((results: Cat[]) => {
      this.cats = results;
      this.loading = false;
    });
  }

  choose(id: string) {
    this.loading = true;
    this.catService.chooseCat(id).subscribe((result) => {
      console.log("OK");
      this.loadRandomCats();
    });
  }

}


