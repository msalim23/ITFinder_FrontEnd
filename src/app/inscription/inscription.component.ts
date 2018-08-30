import { Component, OnInit } from '@angular/core';
import { IDemandeur } from '../domain/idemandeur';
import { Route, Router } from '../../../node_modules/@angular/router';
import { DemandeursService } from '../services/demandeur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  utilisateur: IDemandeur = {
    login: '',
    password: '',
    nom: '',
    prenom: '',
    email: '',
  };

  constructor(private _service: DemandeursService, private _router: Router) { }

  addDemandeur() {
    this._service.addDemandeur(this.utilisateur).subscribe(resp => console.log('creation avec succes'));

    this._router.navigate(['/demandeurs']);
  }

  ngOnInit() {
  }

}
