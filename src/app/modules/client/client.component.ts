import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/classes/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  produits: Observable<Client[]>;
  newprod = new Client();
  newrow = new Client();
  rows: Array<any> = [];
  rowstst: Array<any> = [];
  rowststg: Array<any> = [];
  rowssearch: Array<any> = [];
  rowupdate= new Client();
  totalprix:number = 0;
  totalprixachat:number = 0;
  totalqnt:number = 0;
  update:boolean = false;
  addprd:boolean = false;
  imgchnge:boolean = false;
  pagehidden:boolean = true;
  searchhidden:boolean = false;

  id:number;
  clnimg:string ="";
  name:string ="";
  ice:number;
  addfact:string ="";
  addlaivr:string ="";
  plafond:number;
  solde:number;
  tel:number;

  
  clnimgmodal:string ="";
  namemodal:string ="";
  icemodal:number;
  addfactmodal:string ="";
  addlaivrmodal:string ="";
  plafondmodal:number;
  soldemodal:number;
  telmodal:number;
 
  i:number = 0;
  p :number = 1;
  searchname : any;
  searchqnt : any;
  searchprix : any;
  qntacht:number = 1;

  nameinput:boolean = false;
  qntinput:boolean = false;
  prixinput:boolean = false;

  rowststgid:number;
  constructor( private produitService: ClientService , public prodchange: ClientService) {}

  ngOnInit() {
    this.reloadData2();
    /* this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));
    this.totalqnt = JSON.parse(localStorage.getItem("tokenqnt")); */
  
  }

  reloadData2() {
    this.produits= this.produitService.getClient();
    this.produits.subscribe(res => 
      {
          this.rowststg = res;
      });
  }

  addprod(){

    this.produitService.addClient(this.newprod).subscribe(()=>this.reloadData2());
    this.addprd=false;
    this.imgchnge=false;
  }


  updateInfo(id,clnimg,name,ice,addfact,addlaivr,plafond,solde,tel){
    this.update=true;
    this.id = id;
    this.clnimg = clnimg;
    this.name = name;
    this.ice = ice;
    this.addfact = addfact;
    this.addlaivr = addlaivr;
    this.plafond = plafond;
    this.solde = solde;
    this.tel = tel;

    this.clnimgmodal = clnimg;
    this.namemodal = name;
    this.icemodal = ice;
    this.addfactmodal = addfact;
    this.addlaivrmodal = addlaivr;
    this.plafondmodal = plafond;
    this.soldemodal = solde;
    this.telmodal = tel;

  }

  updateInfoBD(){
    this.rowupdate.id=this.id;
    this.rowupdate.name=this.namemodal;
    this.rowupdate.clnimg="../../../assets/imgs/"+this.clnimgmodal.replace(/C:\\fakepath\\/, '');
    this.rowupdate.ice=this.icemodal;
    this.rowupdate.addfact=this.addfactmodal;
    this.rowupdate.addlaivr=this.addlaivrmodal;
    this.rowupdate.plafond=this.plafondmodal;
    this.rowupdate.solde=this.soldemodal;
    this.rowupdate.tel=this.telmodal;
    this.produitService.putClient(this.id,this.rowupdate).subscribe(()=>this.reloadData2());
    this.update=false;
  }

  imgchange(){
    this.clnimg= "../../../assets/imgs/"+this.clnimgmodal.replace(/C:\\fakepath\\/, '');
  }
  imgadd(){
    this.newprod.clnimg= "../../../assets/imgs/"+this.newprod.clnimg.replace(/C:\\fakepath\\/, '');
    this.imgchnge = true;
  }

  deleteprod(id,name){
    let cf=window.confirm('WACH VRAI BAGHI TSUPRIMER  '+name+ '  ???');
    if(cf==true){
       let resp=this.produitService.deleteClient(id);
    resp.subscribe(()=>this.reloadData2());
    }  
  }

  Searchname(){ 
    
    if(this.searchname != ""){
      this.rowststg = this.rowststg.filter(res=>{ 
        return res.name.toLocaleLowerCase().match(this.searchname.toLocaleLowerCase());
      });
    }else{ 
      this.ngOnInit();
    }
    
  }

}
