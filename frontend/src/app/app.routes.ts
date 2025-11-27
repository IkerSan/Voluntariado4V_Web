import { Routes } from '@angular/router';
import { PaginaPrincipal } from './pagina-principal/pagina-principal';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { DASHBOARD_CHILD_ROUTES } from './pages/dashboard/dashboard.routes';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'pagina-principal', 
        pathMatch: 'full'
    },
    { path: 'pagina-principal', component: PaginaPrincipal },
    { path: 'dashboard', component: DashboardComponent ,children: DASHBOARD_CHILD_ROUTES,},
];
