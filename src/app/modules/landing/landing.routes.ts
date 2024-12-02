import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { BusinessPlatformComponent } from './pages/business-platform/business-platform.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

export const LandingRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'business-platform',
                component: BusinessPlatformComponent,
            },
            {
                path: 'our-services',
                component: ServicesComponent,
            },
            {
                path: 'contact',
                component: ContactComponent,
            },
            {
                path: 'get-started',
                component: GetStartedComponent,
            }
        ]
    }
];
