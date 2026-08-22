import { Routes } from '@angular/router';
import { MainLayout } from './layout';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        component: MainLayout,       // Header + Sidebar wala layout
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'properties',
                loadChildren: () => import('./features/properties/properties.routes').then(m => m.PROPERTIES_ROUTES)
            },
            {
                path: 'bookings',
                loadComponent: () => import('./features/bookings/bookings').then(m => m.Bookings)
            },
            {
                path: 'payments',
                loadComponent: () => import('./features/payments/payments').then(m => m.Payments)
            },

        ]
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found').then(m => m.NotFound)
    }
];
