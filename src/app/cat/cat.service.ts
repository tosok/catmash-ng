import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get(environment.apiBaseUrl + '/cats');
  }

  getRandomCats() {
    return this.http.get(environment.apiBaseUrl + '/cats/random');
  }

  chooseCat(id: string) {
    return this.http.post(environment.apiBaseUrl + '/cats/'+ id +'/vote', {}, {});
  }
}
