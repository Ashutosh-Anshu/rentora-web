import { Routes } from '@angular/router';

export const PROPERTIES_ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: '', loadComponent: () => import('./property-list/property-list').then(m => m.PropertyList) },
            { path: 'property-add', loadComponent: () => import('./property-add/property-add').then(m => m.PropertyAdd) },
            { path: 'edit/:id', loadComponent: () => import('./property-add/property-add').then(m => m.PropertyAdd) },
        ]
    }
];