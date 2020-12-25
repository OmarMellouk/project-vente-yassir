import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produits: Observable<Produit[]>;
  newprod = new Produit();
  newrow = new Produit();
  rows: Array<any> = [];
  rowstst: Array<any> = [];
  rowststg: Array<any> = [];
  rowssearch: Array<any> = [];
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
  searchname : any;
  searchqnt : any;
  searchprix : any;
  qntacht:number = 1;

  nameinput:boolean = false;
  qntinput:boolean = false;
  prixinput:boolean = false;

  rowststgid:number;
  constructor( private produitService: ProduitService , public prodchange: ProduitService) {}

  ngOnInit() {
    this.reloadData2();
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
          this.rowststgid = this.rowststg[this.rowststg.length-1].id;
      });
  }

  addprod(){

    this.newprod.ref = 1000001+this.rowststgid;
    this.produitService.addProduit(this.newprod).subscribe(()=>this.reloadData2());
    this.addprd=false;
    this.imgchnge=false;
  }


  updateInfo(id ,img, name, quantity, prix, prixachat){
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
  }

  imgchange(){
    this.img= "../../../assets/imgs/"+this.imgmodal.replace(/C:\\fakepath\\/, '');
  }
  imgadd(){
    this.newprod.prodimg= "../../../assets/imgs/"+this.newprod.prodimg.replace(/C:\\fakepath\\/, '');
    this.imgchnge = true;
  }

  deleteprod(id,name){
    let cf=window.confirm('WACH VRAI BAGHI TSUPRIMER  '+name+ '  ???');
    if(cf==true){
       let resp=this.produitService.deleteProduit(id);
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
  Searchqnt(){ 
    
    if(this.searchqnt != ""){
      this.rowststg = this.rowststg.filter(res=>{ 
        return String(res.quantity).match(this.searchqnt);
      });
    }else{ 
      this.ngOnInit();
    }
    
  }
  Searchprix(){ 
    
    if(this.searchprix != ""){
      this.rowststg = this.rowststg.filter(res=>{ 
        return String(res.prix).match(this.searchprix);
      });
    }else{ 
      this.ngOnInit();
    }
    
  }

}
