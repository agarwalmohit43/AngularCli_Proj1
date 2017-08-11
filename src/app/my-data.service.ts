import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }
  fetchData(){
    return this.http.get('src/data/students.json').map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }
  obj = {
    id: '1',
    name: 'Mohit',
    roll: '43'
  }

  success() {
    return 'Successful';
  }
}
