import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  
  getAllBooks() {
    const url_api = "http://localhost:3000/api/books";
    return this.http.get(url_api);
  }

}
