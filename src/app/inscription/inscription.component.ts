import { Component, OnInit } from '@angular/core';
import { IUtilisateur } from '../domain/iutilisateur';
import { Route, Router } from '../../../node_modules/@angular/router';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  utilisateur: IUtilisateur = {
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    ville: '',
    codepostal: '',
    password: '',
    login: ''
  };

  constructor(private _service: JobsService, private _router: Router) { }

  inscription() {
    this._service.inscription(this.utilisateur).subscribe(resp => console.log('inscrit avec succes'));
}

  ngOnInit() {
  }

}
