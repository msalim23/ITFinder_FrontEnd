import { Component, OnInit } from '@angular/core';
import { IUser } from '../domain/iuser';
import { Route, Router } from '../../../node_modules/@angular/router';
import { DemandeursService } from '../services/demandeur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

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

  constructor(private _service: DemandeursService, private _router: Router) { }

  addDemandeur() {
    this._service.addDemandeur(this.utilisateur).subscribe(resp => console.log('creation avec succes'));

    this._router.navigate(['/welcome']);
  }

  ngOnInit() {
  }

}
