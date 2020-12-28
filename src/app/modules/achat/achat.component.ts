import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Achat } from 'src/app/classes/achat';
import { Fournisseur } from 'src/app/classes/fournisseur';
import { Produit } from 'src/app/classes/produits';
import { AchatService } from 'src/app/services/achat.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  produits: Observable<Produit[]>;
  achats: Observable<Achat[]>;
  frn: Observable<Fournisseur[]>;
  rowststg: Array<any> = [];
  rowsachat: Array<any> = [];
  rowsfrn: Array<any> = [];

  fieldArray = new Produit();
  prodput = new Produit();
  prodname: Array<any> = [];
  newAttribute = new Achat();

  prixachat:number;
  frnname:string;

  i:number = 0;
  j:number = 0;

  qntttc:number = 0;
  qntnoir:number = 0;
  constructor(private produitService: ProduitService, private achatservice: AchatService, private frnservice: FournisseurService) { }

  ngOnInit(): void {
    this.reloadData2();
    this.reloadachat();
    this.reloadfrn();
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
  reloadfrn() {
    this.frn= this.frnservice.getFournisseur();
    this.frn.subscribe(res => 
      {
          this.rowsfrn = res;
      });
  }
  addrow(){
    let i = 0;
    while (this.rowststg[i].name != this.newAttribute.name) {
      i++;
    }
    this.newAttribute.prixvent = this.rowststg[i].prix;
      this.achatservice.addAchat(this.newAttribute).subscribe(()=>this.reloadachat());
      this.rowststg[i].qntttc = this.rowststg[i].qntttc + this.newAttribute.ttc;
      this.rowststg[i].qntnoir = this.rowststg[i].qntnoir + this.newAttribute.noir;
      this.produitService.putProduit(this.rowststg[i].id,this.rowststg[i]).subscribe(()=>this.reloadachat());
      
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
  print(){
    window.print();
  }

  ttc(){
    if (this.i == 0) {
      this.newAttribute.ttc = this.newAttribute.quantity;
      this.newAttribute.noir = 0;
    }else{
      this.newAttribute.ttc = 0;
    }
    
    this.i = 1-this.i;
    /* this.qntttc = this.newAttribute.ttc; */
  }
  noir(){
    if (this.j == 0) {
      this.newAttribute.noir = this.newAttribute.quantity;
      this.newAttribute.ttc = 0;
    }else{
      this.newAttribute.noir = 0;
    }
    
    this.j = 1-this.j;
    /* this.qntnoir = this.newAttribute.noir; */
  }
}
