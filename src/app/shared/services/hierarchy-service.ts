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
  modifyArticle(article: any) {
    return this.http.put<Project>('http://localhost:5000/api/Articles', article);
  }
  createArticle(article: any) {
    return this.http.post<Project>('http://localhost:5000/api/Articles', article);
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

  transferProject(data: any) {
    return this.http.post<any>('http://localhost:5000/api/projects/transfer', data);
  }
  transferArticle(data: any) {
    return this.http.post<any>('http://localhost:5000/api/articles/transfer', data);
  }

  constructor(private http: HttpClient) { }

  getHierarchy() {
    return this.http.get<Client[]>('http://localhost:5000/api/hierarchy');
  }
}
