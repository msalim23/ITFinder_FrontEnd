import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob } from '../domain/ijob';
import { IUser } from '../domain/iuser';

@Injectable({
  providedIn: 'root'
})
export class DemandeursService {

  URL = 'http://localhost:8080/demandeurs/';
  constructor(private _Http: HttpClient) { }

  addDemandeur(demandeur: IUser): Observable<any> {
    return this._Http.post(this.URL , demandeur);
  }


  getDemandeurById(id: string): Observable<IUser> {
    return this._Http.get<IUser>(this.URL + id);
  }


  getDemandeurs(): Observable<IUser[]> {

     return this._Http.get<IUser[]>(this.URL);
}
}
