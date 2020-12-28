import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produits';
import { ProduitService } from 'src/app/services/produit.service';
import 'rxjs/add/operator/filter';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produits: Observable<Produit[]>;
  newprod = new Produit();
  newrow = new Produit();
  newrowtn = new Produit();
  rows: Array<any> = [];
  rowstst: Array<any> = [];
  rowststg: Array<any> = [];
  rowssearch: Array<any> = [];
  rowscln: Array<any> = [];
  rowupdate= new Produit();
  totalprix:number = 0;
  totalprixachat:number = 0;
  totalqnt:number = 0;
  update:boolean = false;
  addprd:boolean = false;
  imgchnge:boolean = false;
  pagehidden:boolean = true;
  searchhidden:boolean = false;

  id:number;
  img:string ="";
  name:string ="";
  quantity:number;
  prix:number;
  prixachat:number;

  imgmodal:string ="";
  namemodal:string ="";
  quantitymodal:number ;
  prixmodal:number ;
  prixachatmodal:number ;
 
  i:number = 0;
  p :number = 1;
  searchcode : any;
  searchname : any;
  qntacht:number = 1;

  codebare:boolean = false;
  codename:boolean = false;

  newcln:string;

  qntttc:number;
  qntnoir:number;

  constructor( public produitService: ProduitService , public prodchange: ProduitService , public clnservice: ClientService) {}

  ngOnInit() {
    this.reloadData2();
    this.reloadcln();
    this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));
    this.totalqnt = JSON.parse(localStorage.getItem("tokenqnt"));
  }

  reloadData2() {
    this.produits= this.produitService.getProduit();
    this.produits.subscribe(res => 
      {
          this.rowststg = res;
      });
  }

  reloadcln() {
    this.clnservice.getClient().subscribe(res => 
      {
          this.rowscln = res;
      });
  }
  addprod(){
    this.produitService.addProduit(this.newprod).subscribe(()=>this.reloadData2());
    this.addprd=false;
    this.imgchnge=false;
  }


  addrow(id, prod, name, qntttc, qntnoir, prix, prixachat){
    if(prod.qntttc + prod.qntnoir > 0){
      /* prod.quantity = prod.quantity - quantityacht;
      this.produitService.putProduit(id,prod).subscribe(()=>this.reloadData2()); */

      this.newrow.id= id;
      this.newrow.name= name;
      this.newrow.qntttc= qntttc;
      this.newrow.qntnoir= qntnoir;
      /* this.newrow.quantityacht= quantityacht; */
      this.newrow.prix= prix;
      this.newrow.prixachat= prixachat;
      this.rows.push(this.newrow);
      localStorage.setItem("token", JSON.stringify(this.rows));
      this.newrow = new Produit();

      /* this.totalprix=this.totalprix+prix*quantityacht;
      this.totalprixachat=this.totalprixachat+prixachat*quantityacht;
      this.totalqnt=this.totalqnt+quantityacht;
      localStorage.setItem("tokenprix", JSON.stringify(this.totalprix));
      localStorage.setItem("tokenprixachat", JSON.stringify(this.totalprixachat));
      localStorage.setItem("tokenqnt", JSON.stringify(this.totalqnt)); */

      /* this.prodchange.echangerows = this.rows;
      this.prodchange.echangeprix = this.totalprix; */

    }
    else{
      alert("La quantité de "+prod.name+" est vide !" );
    }
    
  }

  deleterow(index, id, prix, prixachat, quantityacht){
    
    this.produits.subscribe(res => 
    {
        this.rowstst = res;
        this.i = 0;
        while (this.rowstst[this.i].id != id) {
          this.i++;
        }
        this.rowstst[this.i].quantity += quantityacht;
        this.produitService.putProduit(id,this.rowstst[this.i]).subscribe(()=>this.reloadData2());
    });

    this.rows.splice(index, 1);
    localStorage.setItem("token", JSON.stringify(this.rows));
    this.totalprix=this.totalprix-prix;
    localStorage.setItem("tokenprix", JSON.stringify(this.totalprix));
    this.totalprixachat=this.totalprixachat-prixachat;
    localStorage.setItem("tokenprixachat", JSON.stringify(this.totalprixachat));
    this.totalqnt=this.totalqnt-quantityacht;
    localStorage.setItem("tokenqnt", JSON.stringify(this.totalqnt));

   /*  this.prodchange.echangerows = this.rows;
    this.prodchange.echangeprix = this.totalprix; */
  }

  /* updateInfo(id ,img, name, quantity, prix, prixachat){
    this.update=true;
    this.id = id;
    this.img = img;
    this.name = name;
    this.quantity = quantity;
    this.prix = prix;
    this.prixachat = prixachat;

    this.imgmodal = img;
    this.namemodal = name;
    this.quantitymodal = quantity;
    this.prixmodal = prix;
    this.prixachatmodal = prixachat;

  }

  updateInfoBD(){
    this.rowupdate.id=this.id;
    this.rowupdate.name=this.namemodal;
    this.rowupdate.prodimg="../../../assets/imgs/"+this.imgmodal.replace(/C:\\fakepath\\/, '');
    this.rowupdate.quantity=this.quantitymodal;
    this.rowupdate.prix=this.prixmodal;
    this.rowupdate.prixachat=this.prixachatmodal;
    this.produitService.putProduit(this.id,this.rowupdate).subscribe(()=>this.reloadData2());
    this.update=false;
  } */

  /* imgchange(){
    this.img= "../../../assets/imgs/"+this.imgmodal.replace(/C:\\fakepath\\/, '');
  }
  imgadd(){
    this.newprod.prodimg= "../../../assets/imgs/"+this.newprod.prodimg.replace(/C:\\fakepath\\/, '');
    this.imgchnge = true;
  } */

  /* deleteprod(id,name){
    let cf=window.confirm('WACH VRAI BAGHI TSUPRIMER  '+name+ '  ???');
    if(cf==true){
       let resp=this.produitService.deleteProduit(id);
    resp.subscribe(()=>this.reloadData2());
    }  
  } */

  /* Search(){ 
    if(this.search === ""){
      this.pagehidden = true;
      this.searchhidden = false;
    }else{
      
      let resp=this.produitService.chercher(this.search);
        resp.subscribe(data=>{this.rowssearch=JSON.parse(data);});
      this.pagehidden = false;
      this.searchhidden = true;
    } 
     
  } */

  
  Searchcode(){ 
    
    if(this.searchcode != ""){
      this.rowststg = this.rowststg.filter(res=>{ 
        return String(res.ref).match(this.searchcode);
      });
    }else{ 
      this.ngOnInit();
    }
    
  }

  Searchname(){ 
    
    if(this.searchname != ""){
      this.rowststg = this.rowststg.filter(res=>{ 
        return String(res.name).match(this.searchname);
      });
    }else{ 
      this.ngOnInit();
    }
    
  }

  inpttc(prod){
    this.newrowtn = prod;
    this.newrowtn.qntttc = this.newrowtn.qntttc - this.qntttc;
    this.produitService.putProduit(this.newrowtn.id,this.newrowtn).subscribe(()=>this.reloadData2());
  }

  inpnoir(prod){
    this.newrowtn = prod;
    this.newrowtn.qntnoir = this.newrowtn.qntnoir - this.qntnoir;
    this.produitService.putProduit(this.newrowtn.id,this.newrowtn).subscribe(()=>this.reloadData2());
  }

}

