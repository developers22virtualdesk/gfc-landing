import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material/angular-material.module';
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  imports: [
    RouterModule.forChild(LandingRoutes),
    CommonModule,
    AngularMaterialModule,
    FooterComponent
],
  declarations: [
    LandingComponent,

    HomeComponent,
    ServicesComponent
  ]
})
export class LandingModule { }
