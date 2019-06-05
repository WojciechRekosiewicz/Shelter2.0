import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvertList } from './advert/advertList.component';
import { DataService } from './shared/dataService';
import { HttpClientModule } from '@angular/common/http';
import { UserAdverts } from './advert/userAdverts/userAdverts';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


//let routes = [
//    { path: "", component: Advert }
//];

@NgModule({
  declarations: [
      AppComponent,
      AdvertList,
      UserAdverts,
      NavMenuComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  providers: [
        DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
