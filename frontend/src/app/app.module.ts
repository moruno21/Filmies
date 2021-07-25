import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpStatusCode } from '@angular/common/http';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmsFormComponent } from './components/films-form/films-form.component';
import { FilmsPageComponent } from './components/films-page/films-page.component';

// Services
import { FilmsService } from './services/films.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmsFormComponent,
    FilmsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [FilmsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
