import { Client } from '../../model/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project, Article, Bag } from 'src/app/model';


@Injectable({
    providedIn: 'root'
  })
export class BagManagementService {

    constructor(private http: HttpClient) { }

    getBagById(id:any) {
        return this.http.get<Bag[]>(`http://localhost:5000/api/bags/${id}`);
      }
    
  ProjectSetBag(projectBag: any) {
    return this.http.post<Project>('http://localhost:5000/api/Projects/setBag', projectBag);
  }

  ArticleSetBag(articleBag: any) {
    return this.http.post<Article>('http://localhost:5000/api/Articles/setBag', articleBag);
  }

  getProjects() {
    return this.http.get<Project[]>('http://localhost:5000/api/Projects');
  }
 getArticles() {
    return this.http.get<Article[]>('http://localhost:5000/api/Articles');
 }

}
