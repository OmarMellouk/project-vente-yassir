import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produits';

@Component({
  selector: 'app-caisse2',
  templateUrl: './caisse2.component.html',
  styleUrls: ['./caisse2.component.css']
})
export class Caisse2Component implements OnInit {

  newplus = new Produit();
  newmoin = new Produit();
  pluss: Array<any> = [];
  mnpluss: Array<any> = [];
  jornals: Array<any> = [];
  jorcaisse: Array<any> = [];
  totalprix:  Array<any> = [];
  totalprixachat:  Array<any> = [];
  totalqnt: Array<any> = [];
  datestock: Array<any> = [];

  firstdate: any;
  lastdate: any;

  addprd:boolean = false;
  mnprd:boolean = false;

  nameplus:string ="";
  prixplus:number;

  constructor() { }

  ngOnInit(): void {

    this.jornals = JSON.parse(localStorage.getItem("tokenjornal"));
    if (localStorage.getItem("tokenpluss") != null) {
      this.pluss = JSON.parse(localStorage.getItem("tokenpluss"));
    }
    if (localStorage.getItem("tokenmnpluss") != null) {
      this.mnpluss = JSON.parse(localStorage.getItem("tokenmnpluss"));
    }
    

  }

  Searchdate(){ 
    
    if(this.firstdate != "" || this.lastdate != ""){
      this.jornals = this.jornals.filter(
        m => { return new Date(m.date) >= new Date(this.firstdate) && new Date(m.date) <= new Date(this.lastdate)}
        );
    }else{ 
      this.ngOnInit();
    }
  }

  addplus(){
    this.newplus.name=this.nameplus;
    this.newplus.prix=this.prixplus;
    this.pluss.push(this.newplus);
    this.addprd = false;
    localStorage.setItem("tokenpluss", JSON.stringify(this.pluss));
  }
  mnplus(){
    this.newmoin.name=this.nameplus;
    this.newmoin.prix=this.prixplus;
    this.mnpluss.push(this.newmoin);
    this.mnprd = false;
    localStorage.setItem("tokenmnpluss", JSON.stringify(this.mnpluss));
  }

  ferm(){

  }
}
