import {Component, Input} from '@angular/core';

@Component({
  selector: 'ng-catmash-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  title: string = 'Cat Mash';
}
