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
            },
            {
                path: 'concesionario',
                title: 'Concesionario',
                loadComponent: ( ) => import('./dashboard/pages/concesionario/concesionario.component').then(m => m.ConcesionarioComponent),
            },
            {
                path: 'permisos',
                title: 'Permisos',
                loadComponent: ( ) => import('./dashboard/pages/permisos/permisos.component').then(m => m.PermisosComponent),
            },
            {
                path: 'permisos-detail/:PermisionarioId',
                title: 'Detalle del permisionario',
                loadComponent: ( ) => import('./dashboard/pages/permisos-detail/permisos-detail.component').then(m => m.PermisosDetailComponent),
              
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
