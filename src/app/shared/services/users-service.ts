import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://localhost:5001/api/users')
      .toPromise()
      // .then(res => res.data as User[])
      .then(data => {
        console.log(data);
        return data;
      });
  }

  modifyUser(user: any) {
    return this.http.put<User[]>('https://localhost:5001/api/users', user)
      .toPromise()
      // .then(res => res.data as User[])
      .then(data => {
        console.log(data);
        return data;
      });
  }
}
