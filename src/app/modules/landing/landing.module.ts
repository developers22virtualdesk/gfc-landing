import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material/angular-material.module';
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  imports: [
    RouterModule.forChild(LandingRoutes),
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [
    LandingComponent,

    HomeComponent,
    ServicesComponent,
    ContactComponent
  ]
})
export class LandingModule { }
