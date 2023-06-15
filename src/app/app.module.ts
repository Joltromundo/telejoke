import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layouts/header/header.component';
import { JokesComponent } from './pages/jokes/jokes.component';
import { FooterComponent } from './core/layouts/footer/footer.component';

import axios from 'axios';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
