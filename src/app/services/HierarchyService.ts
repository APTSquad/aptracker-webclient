import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HierarchyService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Client[]>('assets/data/hierarchy.json')
      .toPromise()
      // .then(res => <any[]>res.data)
      .then(data => { return data; });
  }
}
