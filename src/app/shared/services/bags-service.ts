import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bag } from 'src/app/model';


@Injectable({
  providedIn: 'root'
})
export class BagsManagementService {

  constructor(private http: HttpClient) { }

  getBags() {
    return this.http.get<Bag[]>('https://localhost:5001/api/bags')
      .toPromise()
      // .then(res => res.data as User[])
      .then(data => {
        console.log(data);
        return data;
      });
  }

  createBag(data: any) {
    return this.http.post<Bag>('https://localhost:5001/api/bags', data)
      .toPromise()
      // .then(res => res.data as User[])
      .then(data => {
        console.log(data);
        return data;
      });
  }
}
