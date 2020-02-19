import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
