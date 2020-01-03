import { Component, OnInit } from '@angular/core';
import { BagReportService } from 'src/app/shared/services/bag-report-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BagsManagementService } from 'src/app/shared/services/bags-service';

@Component({
  selector: 'app-bag-report-page',
  templateUrl: './bag-report-page.component.html',
  styleUrls: ['./bag-report-page.component.scss']
})
export class BagReportPageComponent implements OnInit {
  data: any;
  date: any;
  form: FormGroup;
  bags: any;
  isLoadingReport: boolean = false;

  submit() {
    this.reportData = null;
    this.isLoadingReport = true;
    this.service.getReport(this.form.value).subscribe(res => {
      this.reportData = res;
      this.isLoadingReport = false;
    });
  }

  controlHasErrors(controlName: string): boolean {
    return Boolean(this.form.controls[controlName].errors);
  }

  constructor(private service: BagReportService, fb: FormBuilder,
    private bagService: BagsManagementService) {
    this.form = fb.group({
      range: [{ begin: null, end: null }],
      bagId: null
    });
  }

  ngOnInit() {
    this.bagService.getBags().subscribe(bags => {
      this.bags = bags;
    });

  }
  reportData = null;
  displayedColumns: string[] = ['clientName'];
}
