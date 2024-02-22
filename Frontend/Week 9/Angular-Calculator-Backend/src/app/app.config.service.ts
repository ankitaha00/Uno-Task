import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private baseUrl = '<http://localhost:8080/Angular-Calculator-Backend/calculator>';

  constructor(private http: HttpClient) { }

  calculate(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
}