import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Article } from 'src/app/model';

@Injectable({
    providedIn: 'root'
})
export class ArticlesManagementService {

    constructor(private http: HttpClient) { }

    getCommon() {
        return this.http.get<Article[]>('http://localhost:5000/api/articles/common');
    }

    createCommon(data: any) {
        return this.http.post<Article>('http://localhost:5000/api/articles/createCommon', data);
    }

    modifyArticle(data: any) {
        return this.http.put<Article[]>('http://localhost:5000/api/articles', data);
    }
}
