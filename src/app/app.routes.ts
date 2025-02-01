import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: ( ) => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: '',
                redirectTo: 'home',pathMatch: 'full',
            },
            {
                path: 'home',
                title: 'Inicio',
                loadComponent: ( ) => import('./dashboard/pages/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'example',
                title: 'Ejemplo',
                loadComponent: ( ) => import('./dashboard/pages/example/example.component').then(m => m.ExampleComponent),
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
