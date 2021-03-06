import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bag } from 'src/app/model';


@Injectable({
  providedIn: 'root'
})
export class BagsManagementService {
  constructor(private http: HttpClient) { }


  modifyBag(data: any) {
    return this.http.put<Bag>('http://localhost:5000/api/bags', data);
  }

  getBags() {
    return this.http.get<Bag[]>('http://localhost:5000/api/bags');
  }

  getMyBags() {
    return this.http.get<Bag[]>('http://localhost:5000/api/bags/myBags');
  }

  createBag(data: any) {
    return this.http.post<Bag>('http://localhost:5000/api/bags', data);
  }
}
