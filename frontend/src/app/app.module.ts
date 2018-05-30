import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SimpleObjectService} from "./simple-object.service";
import {HttpClientModule} from "@angular/common/http";
import { SimpleObjectsListComponent } from './simple-objects-list/simple-objects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleObjectsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SimpleObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
