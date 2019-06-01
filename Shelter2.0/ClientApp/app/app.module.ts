import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvertList } from './advert/advertList.component';
import { DataService } from './shared/dataService';

@NgModule({
  declarations: [
      AppComponent,
      AdvertList
  ],
  imports: [
    BrowserModule
  ],
  providers: [
        DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
