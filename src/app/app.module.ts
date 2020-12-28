import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BuyprodComponent } from './modules/buyprod/buyprod.component';
import { JornalComponent } from './modules/jornal/jornal.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { PrintComponent } from './modules/buyprod/print/print.component';
import { ProduitsComponent } from './modules/produits/produits.component';
import { Caisse2Component } from './modules/caisse2/caisse2.component';
import { AchatComponent } from './modules/achat/achat.component';
import { StockComponent } from './modules/stock/stock.component';
import { ClientComponent } from './modules/client/client.component';
import { FournisseurComponent } from './modules/fournisseur/fournisseur.component';
import { StockinvComponent } from './modules/stockinv/stockinv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    BuyprodComponent,
    JornalComponent,
    PrintComponent,
    ProduitsComponent,
    Caisse2Component,
    AchatComponent,
    StockComponent,
    ClientComponent,
    FournisseurComponent,
    StockinvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule, 
    Ng2OrderModule, 
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
