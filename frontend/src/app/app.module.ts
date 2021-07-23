import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';
import { FilmsFormComponent } from './components/films-form/films-form.component';
import { FilmComponent } from './components/film/film.component';
import { SeriesComponent } from './components/series/series.component';
import { FilmsPageComponent } from './components/films-page/films-page.component';
import { SeriesPageComponent } from './components/series-page/series-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeriesFormComponent,
    FilmsFormComponent,
    FilmComponent,
    SeriesComponent,
    FilmsPageComponent,
    SeriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
