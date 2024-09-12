import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Aula02Component } from './pages/aula-02/aula-02.component';
import { Aula03Component } from './pages/aula-03/aula-03.component';
import { Aula01Component } from './pages/aula-01/aula-01.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "aula01", component: Aula01Component },
    { path: "aula02", component: Aula02Component },
    { path: "aula03", component: Aula03Component },
];
