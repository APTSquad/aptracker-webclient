import { Client } from '../../model/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project, Article, Bag } from 'src/app/model';


@Injectable({
    providedIn: 'root'
})
export class BagReportService {

    constructor(private http: HttpClient) { }

    getReport() {
        return this.http.post<any>(`http://localhost:5000/api/bagreport/`,
            {
                BagId: 1,
                start: '2019-01-02T17:52:52.128Z',
                end: '2020-01-02T17:52:52.128Z'
            });
    }

}
