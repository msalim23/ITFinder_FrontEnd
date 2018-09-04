import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { IUser } from '../domain/iuser';
import { ILoginInfo } from '../domain/ilogin-info';
import { Response } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utilisateur: IUser = {
    login: '',
    password: '',
    nom: '',
    prenom: '',
    email: '',
    cv: '',
    actif: true,
    candidatures: [],
    nomEntreprise: '',
    adresseEntreprise: '',
    numTel: '',
    siteWeb: '',
  };


  loginInfo: ILoginInfo = {
    login: '',
    password: ''
  };

  constructor(private _service: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
   this._service.login(this.loginInfo).subscribe((resp: IUser) => this.utilisateur = resp);

    // this._router.navigate(['/jobs']);
  }

}
