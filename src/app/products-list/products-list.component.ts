import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  data: IProduit[];

  compteur: number;

  arriereplan = 'lightblue';

  constructor( private _service: ProduitsService) { }

  ngOnInit() {

    // this.data$ = this._service.getProduits();
     this._service.getProduits().subscribe (resp => this.data = resp, erreur => console.log('ATTENTION erreur : ' + erreur));
    this.compteur = 0;

  }
  incrementer() {
    this.compteur++;
  }
}
