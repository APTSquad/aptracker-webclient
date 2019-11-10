import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('/assets/data/users.json')
      .toPromise()
      // .then(res => res.data as User[])
      .then(data => {
        console.log(data);
        return data;
      });
  }
}
