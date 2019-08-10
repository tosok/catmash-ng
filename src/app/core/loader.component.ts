import {Component} from "@angular/core";

@Component({
  selector: 'ng-catmash-loader',
  styles: ['.spinner { margin: 250px auto }'],
  template: '<mat-progress-spinner class="spinner" diameter="75" [mode]="\'indeterminate\'"></mat-progress-spinner>'
})
export class LoaderComponent {
}
