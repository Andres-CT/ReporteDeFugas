import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private content = new BehaviorSubject<string>("N/A");
  private content2 = new BehaviorSubject<string>("N/A");
  public share = this.content.asObservable();
  public share2 = this.content2.asObservable();
  constructor() { }
  updateData(text){
    this.content.next(text);
  }
  updateApellido(apellido){
    this.content2.next(apellido);
  }


}
