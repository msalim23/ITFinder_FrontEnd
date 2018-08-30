import { Component, OnInit } from '@angular/core';

import { Router } from '../../../node_modules/@angular/router';
import { JobsService } from '../services/jobs.service';
import { IJob } from '../domain/ijob';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  job: IJob = {
    id: '', titre: '', description: ''
  };


  constructor(private _service: JobsService, private _router: Router) { }

  ngOnInit() {
  }

  addJob() {
    this._service.addJob(this.job).subscribe(resp => console.log('creation avec succes'));

    this._router.navigate(['/jobs']);
  }
}
