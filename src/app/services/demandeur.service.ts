import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJob } from '../domain/ijob';
import { IDemandeur } from '../domain/idemandeur';

@Injectable({
  providedIn: 'root'
})
export class DemandeursService {

  URL = 'http://localhost:8080/demandeurs/';
  constructor(private _Http: HttpClient) { }

  addDemandeur(demandeur: IDemandeur): Observable<any> {
    return this._Http.post(this.URL , demandeur);
  }


  getDemandeurById(id: string): Observable<IDemandeur> {
    return this._Http.get<IDemandeur>(this.URL + id);
  }


  getDemandeurs(): Observable<IDemandeur[]> {

     return this._Http.get<IDemandeur[]>(this.URL);
}
}
