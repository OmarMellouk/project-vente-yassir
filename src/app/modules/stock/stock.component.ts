import { Component, OnInit } from '@angular/core';
import { AchatService } from 'src/app/services/achat.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  rowsachat: Array<any> = [];
  dateachat:any;
  constructor(public achatservice:AchatService) { }

  ngOnInit(): void {
    this.reloadachat();
  }

  reloadachat() {
    this.achatservice.getAchat().subscribe(res => 
      {
          this.rowsachat = res;
      });
  }
}
