import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '../../../node_modules/@angular/router';
import { Observable, Subscription } from '../../../node_modules/rxjs';
import { JobsService } from '../services/jobs.service';
import { IJob } from '../domain/ijob';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit, OnDestroy {

  job: IJob;
  subscription: Subscription;
  id: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: JobsService) { }

  ngOnInit() {
    this.subscription = this._route.paramMap.subscribe( res => {
      this.id = res.get('id');
      this._service.getJobById(this.id).subscribe(
      res2 => {
        this.job = res2;
      }
    ); });

  }

  navigateToList() {
    this._router.navigate(['/jobs']);
  }


  // It is advised to unsubscribe in ngOnDestroy
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
