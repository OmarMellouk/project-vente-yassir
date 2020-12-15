import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jornal } from 'src/app/classes/jornal';
import { PrixjornalService } from 'src/app/services/prixjornal.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-buyprod',
  templateUrl: './buyprod.component.html',
  styleUrls: ['./buyprod.component.css']
})
export class BuyprodComponent implements OnInit {

  
  newjornal = new Jornal();
  jornals: Array<any> = [];
  rows: Array<any> = [];
  totalprix: number;
  totalprixachat: number;
  prixcln: number = 0;
  constructor(public prodchange: ProduitService, public prixjornalservice: PrixjornalService) { }

  ngOnInit(): void {

    this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));
    console.log('tttt :: '+typeof localStorage.getItem("token"));
    /* 
    this.rows = this.prodchange.echangerows;
    this.totalprix = this.prodchange.echangeprix; */
  }

 /*  reloadJornal(){
    this.Jornalobs= this.prixjornalservice.getJornal();
  } */
  savejornal()
  {
    this.newjornal.prixdachat = this.totalprixachat;
    this.newjornal.prixdvente = this.totalprix;
    this.newjornal.profit = this.totalprix - this.totalprixachat;
    this.newjornal.infos = JSON.stringify(localStorage.getItem("token"));
    this.prixjornalservice.addJornal(this.newjornal).subscribe();
  }

}
