import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Bag} from '../../model';

@Injectable()
export class ReportFormService {

  constructor(private http: HttpClient) {}

  getDays() {
    return this.http.get('https://localhost:5001/api/Report/getDays/5');
  }

  getTemplate(body: GetBody) {
    return this.http.post<Report>('https://localhost:5001/api/Report/getTemplate', body);
  }

  getDayInfo(body: GetBody) {
    return this.http.post<DayInfo>('https://localhost:5001/api/Report/getDayInfo', body);
  }

  getReport() {
    return this.http.post('https://localhost:5001/api/Report/getReport', {
      'userId': 6,
      'date': '2020-01-09T18:54:33.998Z'
    });
  }

  saveReport(report: any) {
    return this.http.post('https://localhost:5001/api/Report/saveReport', report);
  }
}

export interface Report {
  common: [];
  clients: [];
}

export interface DayInfo {
  'reportState': number;
  'hoursRequired': number;
  'data': Report;
}

export interface ArticleToSave {
  'articleId': number,
  'hoursConsumption': number;
}

export interface ReportToSave {
  'date': string;
  'userId': number;
  'reportState': number;
  'articles': ArticleToSave[];
}

export interface GetBody {
  'userId': number;
  'date': string;
}

export interface Article {
  name: string;
  isChecked: boolean;
  id: number;
  time: string;
}

export interface Project {
  name: string;
  isChecked: boolean;
  id: number;
  articles: Project[];
}

export interface Client {
  name: string;
  isChecked: boolean;
  id: number;
  projects: Project[];
}
