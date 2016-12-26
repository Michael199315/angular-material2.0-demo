import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent, DialogResultExampleDialog,PizzaPartyComponent } from './app.component';

import 'hammerjs'
@NgModule({
  declarations: [
    AppComponent,
    DialogResultExampleDialog,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  entryComponents: [
    DialogResultExampleDialog,
    PizzaPartyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
