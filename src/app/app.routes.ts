import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        children: [
            {
                path: '',
                title: 'Home',
                loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout)
            }

        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login),
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(m => m.Register),
    },
];
