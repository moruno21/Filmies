import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsFormComponent } from './components/films-form/films-form.component';
import { FilmsPageComponent } from './components/films-page/films-page.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';
import { SeriesPageComponent } from './components/series-page/series-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsPageComponent },
  { path: 'films/add', component: FilmsFormComponent },
  { path: 'films/edit/:id', component: FilmsFormComponent },
  { path: 'series', component: SeriesPageComponent },
  { path: 'series/add', component: SeriesFormComponent },
  { path: 'series/edit/:id', component: SeriesFormComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
