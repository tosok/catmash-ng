import {async, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {CatModule} from "../cat/cat.module";
import {MenuModule} from "../menu/menu.module";
import {AppRoutingModule} from "../app-routing.module";

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MenuModule,
        CatModule
      ],
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Cat Mash'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Cat Mash');
  });

});
