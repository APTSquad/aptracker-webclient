import { Client } from '../../model/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/model';


@Injectable()
export class HierarchyService {
  modifyProject(project: any) {
    return this.http.put<Project>('https://localhost:5001/api/projects', project);
  }
  createProject(project: any) {
    return this.http.post<Project>('https://localhost:5001/api/projects', project);
  }
  modifyClient(client: any) {
    return this.http.put<Client>('https://localhost:5001/api/clients', client);
  }
  createClient(client: any) {
    return this.http.post<Client>('https://localhost:5001/api/clients', client);
  }

  constructor(private http: HttpClient) { }

  getHierarchy() {
    return this.http.get<Client[]>('https://localhost:5001/api/hierarchy');
  }
}
