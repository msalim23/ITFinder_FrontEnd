import { Component, OnInit } from '@angular/core';
import { IDemandeur } from '../domain/idemandeur';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  utilisateur: IDemandeur = {
    login: '',
    password: '',
    nom: '',
    prenom: '',
    email: '',
  };

  constructor(private _service: LoginService) { }

  ngOnInit() {
    this._service.getUser(this.utilisateur);
  }

}
