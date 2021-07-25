import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsFormComponent } from './components/films-form/films-form.component';
import { FilmsPageComponent } from './components/films-page/films-page.component';

const routes: Routes = [
  { path: 'home', component: FilmsPageComponent },
  { path: 'films', component: FilmsPageComponent },
  { path: 'films/add', component: FilmsFormComponent },
  { path: 'films/edit/:id', component: FilmsFormComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
