import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { HomeComponent } from './menu-principal/home/home.component';
import { Submenu1Component } from './menu-principal/submenu1/submenu1.component';
import { Submenu2Component } from './menu-principal/submenu2/submenu2.component';
import { Submenu3Component } from './menu-principal/submenu3/submenu3.component';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    HomeComponent,
    Submenu1Component,
    Submenu2Component,
    Submenu3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'menuprincipal', component: MenuPrincipalComponent,
   children: [
    {path: 'menu', component: HomeComponent},
    {path: 'submenu1', component: Submenu1Component},
    {path: 'submenu2', component: Submenu2Component},
    {path: 'submenu3', component: Submenu3Component},
   ]
  },
  {path: '', redirectTo: 'menuprincipal', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
