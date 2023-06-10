import { Injectable } from '@angular/core';
import { Jobs } from '../model/jobs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  async getJobs(): Promise<Observable<Jobs>> {
   
    return this.http.get<Jobs>('https://www.arbeitnow.com/api/job-board-api');
   
  }

   getJobs1() {
    console.log("getJobs1 service called");
    const headers={'Content-Type':'application/json'};
    return this.http.get<Jobs>('https://www.arbeitnow.com/api/job-board-api',{headers});
    
  }
}
