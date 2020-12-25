import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AchatComponent } from './modules/achat/achat.component';
import { BuyprodComponent } from './modules/buyprod/buyprod.component';
import { PrintComponent } from './modules/buyprod/print/print.component';
import { Caisse2Component } from './modules/caisse2/caisse2.component';
import { HomeComponent } from './modules/home/home.component';
import { JornalComponent } from './modules/jornal/jornal.component';
import { ProduitsComponent } from './modules/produits/produits.component';
import { StockComponent } from './modules/stock/stock.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'achat', component:AchatComponent},
  {path:'stock', component:StockComponent},
  {path:'produit', component:ProduitsComponent},
  {path:'caisse', component:Caisse2Component},
  {path:'buyprod',component:BuyprodComponent},
  {path:'print',component:PrintComponent},
  {path:'jornal',component:JornalComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:"**", redirectTo:'/page-not-found'}                                            
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


