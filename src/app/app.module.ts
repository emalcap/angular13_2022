import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';

import { AuthModule } from './auth/auth.module';
import { DatePipe, DecimalPipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,  
    HttpClientModule,// EMP para usuar HttpClient  
    PagesModule,
    // para formularios
    FormsModule,
    ReactiveFormsModule,
    
  
   
  ],
  // para las fecha loca
  providers: [
    // formato fecha
    DatePipe,
    DecimalPipe,
   // {provide:LOCALE_ID,useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
