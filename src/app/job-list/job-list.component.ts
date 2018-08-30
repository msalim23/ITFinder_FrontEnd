import { Component, OnInit } from '@angular/core';
import { IJob } from '../domain/ijob';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  job: IJob[];

  constructor(private _service: JobsService) { }

  ngOnInit() {
    // this.job = this._service.getJobs();
    this._service.getJobs().subscribe (resp => this.job = resp, erreur => console.log('ATTENTION erreur : ' + erreur));
  }

}
