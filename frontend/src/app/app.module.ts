import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmsFormComponent } from './components/films-form/films-form.component';
import { FilmComponent } from './components/film/film.component';
import { FilmsPageComponent } from './components/films-page/films-page.component';

// Services
import { FilmsService } from './services/films.service';
import { SeriesService } from './services/series.service';

//Http module
import { HttpClientModule, HttpStatusCode } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmsFormComponent,
    FilmComponent,
    FilmsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FilmsService, SeriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
