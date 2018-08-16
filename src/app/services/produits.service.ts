import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  URL = 'http://localhost:8080/produits/';
  constructor(private _Http: HttpClient) { }


  getProduits(): Observable<IProduit[]> {

    return this._Http.get<IProduit[]>(this.URL);
  }
  /* return [
    {'code': 'P100', 'titre': 'Cafe', 'prixUnitaire': 5.5},
    {'code': 'P200', 'titre': 'The', 'prixUnitaire': 4.5},
    {'code': 'P300', 'titre': 'Jus', 'prixUnitaire': 6}
  ]; */

}
