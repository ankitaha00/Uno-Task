import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient : HttpClient) { }
  baseUrl: string="http://localhost:8080/home/calc"; 
  getValuesBackend(value:any):Observable<any>{
   console.log("value",value);
     return this.httpClient.post(this.baseUrl,JSON.stringify(value));
}
}
