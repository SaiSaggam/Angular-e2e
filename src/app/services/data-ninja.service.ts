import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataNinjaService {
  

  constructor( private http: Http) { }
  fetchData() {
//    return this.http.get('https://jsonplaceholder.typicode.com/posts/2').map(
      return this.http.get('https://angular-b7df0.firebaseio.com/.json').map(
      
      (res) => res.json()
    );
//    ).subscribe(
//      (data) => console.log(data)
//    );
  }
  postData() {
  
  }
}

