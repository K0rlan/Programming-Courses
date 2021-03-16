import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1ComponentComponent } from './parent1-component/parent1-component.component';
import { Parent2ComponentComponent } from './parent2-component/parent2-component.component';
import { Child1ComponentComponent } from './child1-component/child1-component.component';
import { Child2ComponentComponent } from './child2-component/child2-component.component';
import { Child3ComponentComponent } from './child3-component/child3-component.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    Parent1ComponentComponent,
    Parent2ComponentComponent,
    Child1ComponentComponent,
    Child2ComponentComponent,
    Child3ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
