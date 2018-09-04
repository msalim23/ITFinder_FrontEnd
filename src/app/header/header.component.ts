import { Component, OnInit } from '@angular/core';
import { IUser } from '../domain/iuser';
import { LoginService } from '../services/login.service';
import { ILoginInfo } from '../domain/ilogin-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  constructor(private _service: LoginService) { }

  ngOnInit() {
  }

  login() {
    this._service.login(this.loginInfo).subscribe((resp: IUser) => this.utilisateur = resp);
  }

}
