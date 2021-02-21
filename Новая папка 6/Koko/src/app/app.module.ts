import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardsComponent } from './cards/cards.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewNewsComponent } from './new-news/new-news.component';
import { NewNewsLayoutComponent } from './new-news-layout/new-news-layout.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    CardsComponent,
    AddNewsComponent,
    NewNewsComponent,
    NewNewsLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
