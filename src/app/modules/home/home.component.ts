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
  totalprix:number = 0;
  update:boolean = false;
 
  constructor( private produitService: ProduitService) {}

  ngOnInit() {
    this.reloadData2();
    this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
  }

  reloadData2() {
    this.produits= this.produitService.getProduit();
  }

  addrow(id, prod, name, quantity, prix){
    if(prod.quantity > 0){
      prod.quantity--;
      this.produitService.putProduit(id,prod).subscribe(()=>this.reloadData2());

      this.newrow.id= id;
      this.newrow.name= name;
      this.newrow.quantity= quantity-1;
      this.newrow.prix= prix;
      this.rows.push(this.newrow);
      localStorage.setItem("token", JSON.stringify(this.rows));
      this.newrow = new Produit();

      this.totalprix=this.totalprix+prix;
      localStorage.setItem("tokenprix", JSON.stringify(this.totalprix));

    }
    else{
      alert("La quantité de "+prod.name+" est vide !" );
    }
    
  }

  deleterow(index, id, prix){
    this.produitService.addqntProduit(id).subscribe(()=>this.reloadData2());
    this.rows.splice(index, 1);
    localStorage.setItem("token", JSON.stringify(this.rows));

    this.totalprix=this.totalprix-prix;
    localStorage.setItem("tokenprix", JSON.stringify(this.totalprix));
  }

}

