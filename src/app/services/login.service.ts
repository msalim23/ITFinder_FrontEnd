import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginInfo } from '../domain/ilogin-info';
import { IDemandeur } from '../domain/idemandeur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://localhost:8080/login/';
  constructor(private _http: HttpClient) { }

  login(loginInfo: ILoginInfo): Observable<any> {
    return this._http.post(this.URL, loginInfo);
  }

  getUser(demandeur: IDemandeur): Observable<any> {
    return this._http.post(this.URL, demandeur);
  }

}
