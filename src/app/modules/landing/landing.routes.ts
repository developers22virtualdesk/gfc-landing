import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { BusinessPlatformComponent } from './pages/business-platform/business-platform.component';

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
                path: 'contact-us',
                component: ContactComponent,
            }
        ]
    }
];
