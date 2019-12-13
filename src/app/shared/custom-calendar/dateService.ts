import { Injectable } from '@angular/core';

@Injectable()
export class DateService  {

    private today = this.newMethod();
    // private tomorrow = new Date(new Date().setDate(this.today.getDate() + 1));
    private oneDaysAgo = new Date(new Date().setDate(this.today.getDate() - 1));
    private twoDaysAgo = new Date(new Date().setDate(this.today.getDate() - 2));
    private threeDaysAgo = new Date(new Date().setDate(this.today.getDate() - 3));
    private fourthDaysAgo = new Date(new Date().setDate(this.today.getDate() - 4));
    private sixDaysAgo = new Date(new Date().setDate(this.today.getDate() - 5));
    private sevenDaysAgo = new Date(new Date().setDate(this.today.getDate() - 6));
    private eightDaysAgo = new Date(new Date().setDate(this.today.getDate() - 7));
    private nineDaysAgo = new Date(new Date().setDate(this.today.getDate() - 8));
    private temDaysAgo = new Date(new Date().setDate(this.today.getDate() - 9));
    private elevenDaysAgo = new Date(new Date().setDate(this.today.getDate() - 10));
    private twelveDaysAgo = new Date(new Date().setDate(this.today.getDate() - 11));
    private thirDaysAgo = new Date(new Date().setDate(this.today.getDate() - 12));


  private newMethod() {
    return new Date();
  }


    private requireFillDateArray: Date[] = [
      this.twoDaysAgo,
      this.fourthDaysAgo,
      this.sixDaysAgo,
      this.eightDaysAgo,

    ];

    private filledDateArray: Date[] = [
      this.oneDaysAgo ,
      this.threeDaysAgo,
      this.sevenDaysAgo,
      this.nineDaysAgo,
      this.temDaysAgo,
      this.elevenDaysAgo,
      this.twelveDaysAgo,
      this.thirDaysAgo
    ];

     dData: DateI[] = [
      {
        date: this.requireFillDateArray,
        type: DateType.REQUIRED
      },
      {
        date: this.filledDateArray,
        type: DateType.REPORTED
      }
    ];


}



// notRequireFill(){

// }


export interface DateI {
  date: Date[];
  type: DateType;
}

export enum DateType {
  REQUIRED = 'red',
  REPORTED = 'green'
}




