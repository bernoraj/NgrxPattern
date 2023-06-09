import { Injectable } from '@angular/core';
import { Jobs } from '../model/jobs';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  async getJobs(): Promise<Jobs> {
    let Jobs={} as Jobs;
    let data= await this.http.get<any>('https://www.arbeitnow.com/api/job-board-api').pipe(map((res:Response)=>console.log(res.json())));
    return Jobs;
  }

   getJobs1(): Jobs {
    let Jobs={} as Jobs;
    let data=  this.http.get<any>('https://www.arbeitnow.com/api/job-board-api').pipe(map((res:Response)=>console.log(res.json())));
    return Jobs;
  }
}
