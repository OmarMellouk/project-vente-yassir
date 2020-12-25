import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Achat } from 'src/app/classes/achat';
import { Produit } from 'src/app/classes/produits';
import { AchatService } from 'src/app/services/achat.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  produits: Observable<Produit[]>;
  achats: Observable<Achat[]>;
  rowststg: Array<any> = [];
  rowsachat: Array<any> = [];

  fieldArray = new Produit();
  newAttribute = new Achat();

  prixachat:number;

  constructor(private produitService: ProduitService, private achatservice: AchatService) { }

  ngOnInit(): void {
    this.reloadData2();
    this.reloadachat();
  }

  reloadData2() {
    this.produits= this.produitService.getProduit();
    this.produits.subscribe(res => 
      {
          this.rowststg = res;
      });
  }
  reloadachat() {
    this.achats= this.achatservice.getAchat();
    this.achats.subscribe(res => 
      {
          this.rowsachat = res;
      });
  }
  addrow(){
    let i = 0;
    while (this.rowststg[i].name != this.newAttribute.name) {
      i++;
    }
    this.newAttribute.prixvent = this.rowststg[i].prix;
      this.achatservice.addAchat(this.newAttribute).subscribe(()=>this.reloadachat());
      this.produitService.addProduit(this.newAttribute).subscribe(()=>this.reloadData2());
      this.newAttribute = new Achat();
  }
 
  deleterow(id,name){
    let cf=window.confirm('WACH VRAI BAGHI TSUPRIMER  '+name+ '  ???');
    if(cf==true){
       let resp=this.achatservice.deleteAchat(id);
    resp.subscribe(()=>this.reloadachat());
    }  
  }
  addprix(){
    /* let i = 0;
    while (this.rowststg[i].name != this.newAttribute.name) {
      i++;
    }
    this.prixachat = this.rowststg[i].prix; */
  }

  multprix(){
    /* this.newAttribute.prix = this.newAttribute.prix*this.newAttribute.quantity; */
  }

  acheter(){
    
  }
}
