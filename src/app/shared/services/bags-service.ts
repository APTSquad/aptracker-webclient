import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bag } from 'src/app/model';


@Injectable({
  providedIn: 'root'
})
export class BagsManagementService {
  constructor(private http: HttpClient) { }

  modifyBag(data: any) {
    return this.http.put<Bag>('https://localhost:5001/api/bags', data);
  }

  getBags() {
    return this.http.get<Bag[]>('https://localhost:5001/api/bags');
  }

  createBag(data: any) {
    return this.http.post<Bag>('https://localhost:5001/api/bags', data);
  }
}
