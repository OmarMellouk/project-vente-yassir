import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produits: Observable<Produit[]>;
  newprod = new Produit();
  newrow = new Produit();
  rows: Array<any> = [];
  rowupdate= new Produit();
  totalprix:number = 0;
  totalprixachat:number = 0;
  update:boolean = false;
  addprd:boolean = false;
  imgchnge:boolean = false;

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
 
  constructor( private produitService: ProduitService , public prodchange: ProduitService) {}

  ngOnInit() {
    this.reloadData2();
    this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));
  }

  reloadData2() {
    this.produits= this.produitService.getProduit();
  }

  addprod(){
    this.produitService.addProduit(this.newprod).subscribe(()=>this.reloadData2());
    this.addprd=false;
    this.imgchnge=false;
  }


  addrow(id, prod, name, quantity, prix, prixachat){
    if(prod.quantity > 0){
      prod.quantity--;
      this.produitService.putProduit(id,prod).subscribe(()=>this.reloadData2());

      this.newrow.id= id;
      this.newrow.name= name;
      this.newrow.quantity= quantity-1;
      this.newrow.prix= prix;
      this.newrow.prixachat= prixachat;
      this.rows.push(this.newrow);
      localStorage.setItem("token", JSON.stringify(this.rows));
      this.newrow = new Produit();

      this.totalprix=this.totalprix+prix;
      this.totalprixachat=this.totalprixachat+prixachat;
      console.log('totot :: '+this.totalprixachat);
      localStorage.setItem("tokenprix", JSON.stringify(this.totalprix));
      localStorage.setItem("tokenprixachat", JSON.stringify(this.totalprixachat));

      /* this.prodchange.echangerows = this.rows;
      this.prodchange.echangeprix = this.totalprix; */

    }
    else{
      alert("La quantité de "+prod.name+" est vide !" );
    }
    
  }

  deleterow(index, id, prix, prixachat){
    this.produitService.addqntProduit(id).subscribe(()=>this.reloadData2());
    this.rows.splice(index, 1);
    localStorage.setItem("token", JSON.stringify(this.rows));

    this.totalprix=this.totalprix-prix;
    localStorage.setItem("tokenprix", JSON.stringify(this.totalprix));
    this.totalprixachat=this.totalprixachat-prixachat;
    localStorage.setItem("tokenprixachat", JSON.stringify(this.totalprixachat));

   /*  this.prodchange.echangerows = this.rows;
    this.prodchange.echangeprix = this.totalprix; */
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
}

