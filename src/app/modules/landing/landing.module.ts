import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material/angular-material.module';
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { BusinessPlatformComponent } from './pages/business-platform/business-platform.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  imports: [
    RouterModule.forChild(LandingRoutes),
    CommonModule,
    AngularMaterialModule,
    FooterComponent,
    MatExpansionModule
  ],
  declarations: [
    LandingComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    BusinessPlatformComponent,
  ]
})
export class LandingModule { }
