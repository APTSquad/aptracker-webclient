import { Client } from '../../model/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/model';


@Injectable()
export class HierarchyService {
  modifyProject(project: any) {
    return this.http.put<Project>('http://localhost:5000/api/projects', project);
  }
  createProject(project: any) {
    return this.http.post<Project>('http://localhost:5000/api/projects', project);
  }
  ProjectSetBag(projectBag: any) {
    return this.http.post<Project>('http://localhost:5000/api/Projects/setBag', projectBag);
  }
  modifyClient(client: any) {
    return this.http.put<Client>('http://localhost:5000/api/clients', client);
  }
  createClient(client: any) {
    return this.http.post<Client>('http://localhost:5000/api/clients', client);
  }

  constructor(private http: HttpClient) { }

  getHierarchy() {
    return this.http.get<Client[]>('http://localhost:5000/api/hierarchy');
  }
}
