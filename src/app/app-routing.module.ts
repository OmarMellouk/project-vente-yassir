import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BuyprodComponent } from './modules/buyprod/buyprod.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'buyprod',component:BuyprodComponent},
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


