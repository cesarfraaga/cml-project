import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';

export const routes: Routes = [
    { path: 'login', component: TelaDeLoginComponent},
    { path: 'main', component: MainPageComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
