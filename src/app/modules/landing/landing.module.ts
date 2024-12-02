import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material/angular-material.module';
import { AdditionalFormComponent } from './components/additional-form/additional-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FooterComponent } from "./components/footer/footer.component";
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { PartnerFormComponent } from './components/partner-form/partner-form.component';
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { BusinessPlatformComponent } from './pages/business-platform/business-platform.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  imports: [
    RouterModule.forChild(LandingRoutes),
    CommonModule,
    AngularMaterialModule,
    FooterComponent,

    GeneralFormComponent,
    PartnerFormComponent,
    ClientFormComponent,
    AdditionalFormComponent
  ],
  declarations: [
    LandingComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    BusinessPlatformComponent,
    GetStartedComponent,
  ]
})
export class LandingModule { }
