import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css'],
  providers: [DatePipe]
})
export class PrintComponent implements OnInit {

  rows: Array<any> = [];
  totalprix: number;
  totalprixachat: number;
  prixcln: number ;
  myDate = new Date();

  constructor(private router: Router, private datePipe: DatePipe) { 
    /* this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); */
  }

  ngOnInit(): void {
    this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));
    this.prixcln = JSON.parse(localStorage.getItem("tokenprixcln"));
  }

  print(){
    window.print();

    localStorage.setItem("token", JSON.stringify([]));
    localStorage.setItem("tokenprix", JSON.stringify(0));
    localStorage.setItem("tokenprixachat", JSON.stringify(0));
    localStorage.setItem("tokenprixcln", JSON.stringify(0));
    this.router.navigate(['/']);
  }
}
