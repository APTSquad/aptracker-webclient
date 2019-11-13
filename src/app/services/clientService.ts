import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Client[]>('assets/client-data/client-data.json')
      .toPromise()
      // .then(res => <any[]>res.data)
      .then(data => { return data; });
  }
}
