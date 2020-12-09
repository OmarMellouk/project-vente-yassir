import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produits: Observable<Produit[]>;
  newrow = new Produit();
  rows: Array<any> = [];
  qnt:number ;
 
  constructor( private produitService: ProduitService) {}

  ngOnInit() {
    this.reloadData2();
    this.rows = JSON.parse(localStorage.getItem("token"));
  }

  reloadData2() {
    this.produits= this.produitService.getProduit();
  }

  addrow(id, prod, name, quantity){
    if(prod.quantity > 0){
      prod.quantity--;
      this.produitService.putProduit(id,prod).subscribe(()=>this.reloadData2());

      this.newrow.id= id;
      this.newrow.name= name;
      this.newrow.quantity= quantity-1;
      this.rows.push(this.newrow);
      localStorage.setItem("token", JSON.stringify(this.rows));
      this.newrow = new Produit();

      this.qnt=10000;
    }
    else{
      alert("La quantité de "+prod.name+" est vide !" );
    }
    
  }

  deleterow(index, id){
    this.produitService.addqntProduit(id).subscribe(()=>this.reloadData2());
    this.rows.splice(index, 1);
    localStorage.setItem("token", JSON.stringify(this.rows));
  }

}

