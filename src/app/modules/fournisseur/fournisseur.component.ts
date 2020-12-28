import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from 'src/app/classes/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  produits: Observable<Fournisseur[]>;
  newprod = new Fournisseur();
  newrow = new Fournisseur();
  rows: Array<any> = [];
  rowstst: Array<any> = [];
  rowststg: Array<any> = [];
  rowssearch: Array<any> = [];
  rowupdate= new Fournisseur();
  totalprix:number = 0;
  totalprixachat:number = 0;
  totalqnt:number = 0;
  update:boolean = false;
  addprd:boolean = false;
  imgchnge:boolean = false;
  pagehidden:boolean = true;
  searchhidden:boolean = false;

  id:number;
  frnimg:string ="";
  name:string ="";
  address:string ="";
  solde:number;
  tel:number;

  
  frnimgmodal:string ="";
  namemodal:string ="";
  addressmodal:string ="";
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
  constructor( private produitService: FournisseurService , public prodchange: FournisseurService) {}

  ngOnInit() {
    this.reloadData2();
   /*  this.rows = JSON.parse(localStorage.getItem("token"));
    this.totalprix = JSON.parse(localStorage.getItem("tokenprix"));
    this.totalprixachat = JSON.parse(localStorage.getItem("tokenprixachat"));
    this.totalqnt = JSON.parse(localStorage.getItem("tokenqnt")); */
  
  }

  reloadData2() {
    this.produits= this.produitService.getFournisseur();
    this.produits.subscribe(res => 
      {
          this.rowststg = res;
      });
  }

  addprod(){

    this.produitService.addFournisseur(this.newprod).subscribe(()=>this.reloadData2());
    this.addprd=false;
    this.imgchnge=false;
  }


  updateInfo(id,frnimg,name,address,solde,tel){
    this.update=true;
    this.id = id;
    this.frnimg = frnimg;
    this.name = name;
    this.address = address;
    this.solde = solde;
    this.tel = tel;

    this.frnimgmodal = frnimg;
    this.namemodal = name;
    this.addressmodal = address;
    this.soldemodal = solde;
    this.telmodal = tel;

  }

  updateInfoBD(){
    this.rowupdate.id=this.id;
    this.rowupdate.name=this.namemodal;
    this.rowupdate.frnimg="../../../assets/imgs/"+this.frnimgmodal.replace(/C:\\fakepath\\/, '');
    this.rowupdate.address=this.addressmodal;
    this.rowupdate.solde=this.soldemodal;
    this.rowupdate.tel=this.telmodal;
    this.produitService.putFournisseur(this.id,this.rowupdate).subscribe(()=>this.reloadData2());
    this.update=false;
  }

  imgchange(){
    this.frnimg= "../../../assets/imgs/"+this.frnimgmodal.replace(/C:\\fakepath\\/, '');
  }
  imgadd(){
    this.newprod.frnimg= "../../../assets/imgs/"+this.newprod.frnimg.replace(/C:\\fakepath\\/, '');
    this.imgchnge = true;
  }

  deleteprod(id,name){
    let cf=window.confirm('WACH VRAI BAGHI TSUPRIMER  '+name+ '  ???');
    if(cf==true){
       let resp=this.produitService.deleteFournisseur(id);
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
