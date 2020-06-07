import { Injectable } from '@angular/core';
import { REPORTS } from './mock-report-list';

@Injectable({
  providedIn: 'root'
})
export class AllReportsService {

  constructor() { }

  getReports() {
    return REPORTS;
  }

}
