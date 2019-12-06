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

  private newMethod() {
    return new Date();
  }

   
    requireFillDateArray: Date[] = [
      this.twoDaysAgo,
      this.fourthDaysAgo,
      this.sixDaysAgo
    ];

    filledDateArray: Date[] = [
      this.oneDaysAgo ,
      this.threeDaysAgo
    ];

    // notRequireFill(){

    // }


}
