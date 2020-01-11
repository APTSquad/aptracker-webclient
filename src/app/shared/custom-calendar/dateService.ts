import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomDates } from 'src/app/model/CustomDates';

@Injectable()
export class DateService  {


  constructor(private http: HttpClient) { }

  getDatesById(userId: any) {
      return this.http.get<CustomDates[]>(`http://localhost:5000/api/Report/getDays/${userId}`);
    }



}




