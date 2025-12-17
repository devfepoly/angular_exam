import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./news/news.component').then(m => m.NewsComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'addNews',
        loadComponent: () => import('./add-news/add-news.component').then(m => m.AddNewsComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
