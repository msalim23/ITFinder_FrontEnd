import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob } from '../domain/ijob';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  URL = 'http://localhost:8080/jobs/';
  constructor(private _Http: HttpClient) { }

  addJob(job: IJob): Observable<any> {
    return this._Http.post(this.URL, job);
  }


  getJobById(id: string): Observable<IJob> {
    return this._Http.get<IJob>(this.URL + id);
  }


  getJobs(): IJob[] {

    // return this._Http.get<IJob[]>(this.URL);

   return [
     {'id': '1', 'titre': 'java', 'description': 'java c est bien'},
     {'id': '2', 'titre': 'c#', 'description': 'c# etc'},
     {'id': '3', 'titre': 'python', 'description': 'prout prout'}
  ];
  }
}
