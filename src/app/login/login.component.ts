import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { IDemandeur } from '../domain/idemandeur';
import { ILoginInfo } from '../domain/ilogin-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utilisateur: IDemandeur = {
    login: '',
    password: '',
    nom: '',
    prenom: '',
    email: '',
  };


  loginInfo: ILoginInfo = {
    login: '',
    password: ''
  };


  constructor(private _service: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
    this._service.login(this.loginInfo).subscribe(resp => console.log('connecté'));
    this._service.getUser(this.utilisateur);
    this._router.navigate(['/welcome']);

  }

}
