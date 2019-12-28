import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:5000/api/users');
  }

  modifyUser(user: any) {
    return this.http.put<User[]>('http://localhost:5000/api/users', user);
  }
}
