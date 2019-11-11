import { Client } from "../model/client";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<any>('assets/clientData/ClientData.json')
      .toPromise()
      .then(res => <Client[]>res.data)
      .then(data => { return data; });
  }
}