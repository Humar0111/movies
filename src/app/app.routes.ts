import { RouterModule, Routes } from '@angular/router';

// Componentes a referenciar:
import { MoviesComponent } from './components/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

// Las constantes siempre van en mayúsculas
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'search/:text', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
