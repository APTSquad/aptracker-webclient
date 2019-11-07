import { Component, OnInit, NgModule } from '@angular/core';
import { ExpTreeModule } from './components/exp-tree/exp-tree';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@NgModule({
  imports: [
    ExpTreeModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [ReportPageComponent],
  declarations: [ReportPageComponent],
})
export class ReportPageModule { }


