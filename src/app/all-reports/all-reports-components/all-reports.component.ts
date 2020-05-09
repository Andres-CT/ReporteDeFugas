import { Component, OnInit } from '@angular/core';
import { Report } from "../report"
import { AllReportsService } from "../all-reports.service"

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent{

  All_reports: Report[];

  constructor(Service: AllReportsService)
  {
    this.All_reports = Service.getReports();
  }

}
