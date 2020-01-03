import { Client } from '../../model/client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project, Article, Bag } from 'src/app/model';


@Injectable({
    providedIn: 'root'
})
export class BagReportService {

    constructor(private http: HttpClient) { }

    getReport(data: any) {
        return this.http.post<any>(`http://localhost:5000/api/bagreport/`,
            {
                bagId: data.bagId,
                begin: data.range.begin.toISOString(),
                end: data.range.end.toISOString(),
            });
    }

}
