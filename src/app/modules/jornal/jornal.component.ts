import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jornal',
  templateUrl: './jornal.component.html',
  styleUrls: ['./jornal.component.css']
})
export class JornalComponent implements OnInit {

  jornals: Array<any> = [];
  totalprix:  Array<any> = [];
  totalprixachat:  Array<any> = [];
  totalqnt: Array<any> = [];
  datestock: Array<any> = [];

  firstdate: any;
  lastdate: any;

  constructor() { }

  ngOnInit(): void {

    this.jornals = JSON.parse(localStorage.getItem("tokenjornal"));

   /*  this.totalqnt = JSON.parse(localStorage.getItem("tokenqnt2"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix2"));
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat2"));
    this.datestock = JSON.parse(localStorage.getItem("datestock")); */

    /* localStorage.setItem("tokenjornal", JSON.stringify([]));
    localStorage.setItem("tokenqnt2", JSON.stringify([]));
    localStorage.setItem("tokenprix2", JSON.stringify([]));
    localStorage.setItem("tokenprixachat2", JSON.stringify([])); 
    localStorage.setItem("datestock", JSON.stringify([])); 
    */

  }

  Searchdate(){ 
    
    if(this.firstdate != "" || this.lastdate != ""){
      this.jornals = this.jornals.filter(
        m => { return new Date(m.date) >= new Date(this.firstdate) && new Date(m.date) <= new Date(this.lastdate)}
        );
    }else{ 
      this.ngOnInit();
    }
    /* filter(
    m => new Date(m.date) >= new Date(startDate) && new Date(m.date) <= new Date(endDate)
    ); */

    /* console.log('date 1 :' + this.firstdate);
    console.log('date 2 : ' + this.lastdate); */
  }
  
}
