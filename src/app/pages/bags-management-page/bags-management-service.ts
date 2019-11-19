import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bag } from 'src/app/model';


@Injectable({
  providedIn: 'root'
})
export class BagsManagementService {

  constructor(private http: HttpClient) { }

  getBags() {
    return this.http.get<Bag[]>('/assets/data/bags.json')
      .toPromise()
      // .then(res => res.data as User[])
      .then(data => {
        console.log(data);
        return data;
      });
  }
}
