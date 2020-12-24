import { Component, OnInit } from '@angular/core';
import { Jornals } from 'src/app/classes/jornals';
import { PrixjornalService } from 'src/app/services/prixjornal.service';
import { ProduitService } from 'src/app/services/produit.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-buyprod',
  templateUrl: './buyprod.component.html',
  styleUrls: ['./buyprod.component.css']
})
export class BuyprodComponent implements OnInit {

  
  newjornal = new Jornals();
  jornals: Array<any> = [];
  rows: Array<any> = [];
  rowsj: Array<any> = [];
  totalprix: number;
  totalprixachat: number;
  prixcln: number = 0;
  totalprix2:  Array<any> = [];
  totalprixachat2:  Array<any> = [];
  totalqnt: Array<any> = [];
  

  constructor(public prodchange: ProduitService, public prixjornalservice: PrixjornalService) { }

  ngOnInit(): void {

    this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));

    /* if (JSON.parse(localStorage.getItem("tokenqnt2")) != null) {
      this.totalqnt = JSON.parse(localStorage.getItem("tokenqnt2"));
    }
    this.totalqnt.push(JSON.parse(localStorage.getItem("tokenqnt")));
    localStorage.setItem("tokenqnt2", JSON.stringify(this.totalqnt));

    if (JSON.parse(localStorage.getItem("tokenprix2")) != null) {
      this.totalprix2 = JSON.parse(localStorage.getItem("tokenprix2"));
    }
    this.totalprix2.push(JSON.parse(localStorage.getItem("tokenprix")));
    localStorage.setItem("tokenprix2", JSON.stringify(this.totalprix2));

    if (JSON.parse(localStorage.getItem("tokenprixachat2")) != null) {
      this.totalprixachat2 = JSON.parse(localStorage.getItem("tokenprixachat2"));
    }
    this.totalprixachat2.push(JSON.parse(localStorage.getItem("tokenprixachat")));
    localStorage.setItem("tokenprixachat2", JSON.stringify(this.totalprixachat2)); */
    /* 
    this.rows = this.prodchange.echangerows;
    this.totalprix = this.prodchange.echangeprix; */

  }

 /*  reloadJornal(){
    this.Jornalobs= this.prixjornalservice.getJornal();
  } */
  savejornal()
  {
    /* this.newjornal.prixdachat = this.totalprixachat;
    this.newjornal.prixdvente = this.totalprix;
    this.newjornal.profit = this.totalprix - this.totalprixachat;
    this.newjornal.infos = JSON.stringify(localStorage.getItem("token"));
    this.prixjornalservice.addJornal(this.newjornal).subscribe(); */

    this.newjornal.id = uuidv4();
    this.newjornal.date = new Date();
    this.newjornal.rows = this.rows;
    this.newjornal.totalprix = localStorage.getItem("tokenprix");
    this.newjornal.totalprixachat = localStorage.getItem("tokenprixachat");
    this.newjornal.totalqnt = localStorage.getItem("tokenqnt");

    localStorage.setItem("tokenprixcln", JSON.stringify(this.prixcln));

    if (JSON.parse(localStorage.getItem("tokenjornal")) != null) {
      this.rowsj = JSON.parse(localStorage.getItem("tokenjornal"));
    }
    this.rowsj.push(this.newjornal);
    localStorage.setItem("tokenjornal", JSON.stringify(this.rowsj));
  }

}
