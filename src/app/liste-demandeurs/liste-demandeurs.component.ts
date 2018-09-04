import { Component, OnInit } from '@angular/core';
import { IUser } from '../domain/iuser';
import { DemandeursService } from '../services/demandeur.service';

@Component({
  selector: 'app-liste-demandeurs',
  templateUrl: './liste-demandeurs.component.html',
  styleUrls: ['./liste-demandeurs.component.css']
})
export class ListeDemandeursComponent implements OnInit {

  utilisateurs: IUser[] ;

  constructor(private _service: DemandeursService) { }

  ngOnInit() {
    this._service.getDemandeurs().subscribe (resp => this.utilisateurs = resp, erreur => console.log('ATTENTION erreur : ' + erreur));
  }

}
