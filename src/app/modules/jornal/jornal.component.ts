import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jornal } from 'src/app/classes/jornal';
import { PrixjornalService } from 'src/app/services/prixjornal.service';

@Component({
  selector: 'app-jornal',
  templateUrl: './jornal.component.html',
  styleUrls: ['./jornal.component.css']
})
export class JornalComponent implements OnInit {

  Jornalobs: Observable<Jornal[]>;
  rows: Array<any> = [];
  totalprix: number;
  totalprixachat: number;
  constructor(public prixjornalservice: PrixjornalService) { }

  ngOnInit(): void {
    this.reloadJornal();
   
    /* this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));
    console.log('ttttjjjj :: '+JSON.parse(localStorage.getItem("tokenjornal"))); */
  }

  reloadJornal(){
    this.Jornalobs= this.prixjornalservice.getJornal();
  }
}
