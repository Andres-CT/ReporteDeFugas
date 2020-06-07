import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { AllReportsService } from '../services/all-reports.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent{
  All_reports: Report[];
  constructor(public Service: AllReportsService){}
  
  ngOnInit(): void {
    this.getReports();
  }

  getReports() {
    this.Service.getReportes().subscribe((data) => {
      this.All_reports = data;
      console.log('respuesta de alumno->' + this.All_reports);
    });
  }
}
