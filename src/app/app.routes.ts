import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'internationalization-Localization-page', loadComponent: () => import('./component/internationalization-localization-page/internationalization-localization-page').then((c) => c.InternationalizationLocalizationPage) },
    { path: 'basicDirective', loadComponent: () => import('./component/basic-directive/basic-directive').then((c) => c.BasicDirective) }
];
