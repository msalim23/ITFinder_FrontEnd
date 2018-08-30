import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob } from '../domain/ijob';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  URL = 'http://localhost:8080/offres/';
  constructor(private _Http: HttpClient) { }

  addJob(job: IJob): Observable<any> {
    return this._Http.post(this.URL , job);
  }


  getJobById(id: string): Observable<IJob> {
    return this._Http.get<IJob>(this.URL + id);
  }


  getJobs(): Observable<IJob[]> {

     return this._Http.get<IJob[]>(this.URL);
}
}
