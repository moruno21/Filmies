import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { FilmsPageComponent } from './components/films-page/films-page.component';
import { SeriesPageComponent } from './components/series-page/series-page.component';

const routes: Routes = [
  { path: 'home', component: FilmsPageComponent },
  { path: 'films', component: FilmsPageComponent },
  { path: 'series', component: SeriesPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
