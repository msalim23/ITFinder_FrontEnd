import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';
import { Route, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  produit: IProduit = {
    code: '', titre: '', prixUnitaire: 0
  };


  constructor(private _service: ProduitsService, private _router: Router) { }

  ngOnInit() {
  }

  addProduit() {
    this._service.addProduit(this.produit).subscribe(resp => console.log('creation avec succes'));

    this._router.navigate(['/list']);
  }
}
