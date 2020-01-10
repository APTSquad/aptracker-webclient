import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Bag} from '../../model';

@Injectable()
export class ReportFormService {

  constructor(private http: HttpClient) {}

  getDays() {
    return this.http.get('https://localhost:5001/api/Report/getDays/5');
  }

  getTemplate() {
    return this.http.post<Report>('https://localhost:5001/api/Report/getTemplate', {
      'userId': 6,
      'date': '2020-01-10T15:20:46.412Z'
    });
  }

  getReport() {
    return this.http.post('https://localhost:5001/api/Report/getReport', {
      'userId': 6,
      'date': '2020-01-09T18:54:33.998Z'
    });
  }

  saveReport(report: any) {
    console.log('saveReportBody', report)

    return this.http.post('https://localhost:5001/api/Report/saveReport', report);
  }
}

export interface Report {
  common: [];
  clients: [];
}
