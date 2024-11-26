import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material/angular-material.module';
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { BusinessPlatformComponent } from './pages/business-platform/business-platform.component';
import { MatExpansionModule } from '@angular/material/expansion';

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
    ServicesComponent,
    BusinessPlatformComponent
  ]
})
export class LandingModule { }
