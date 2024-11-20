import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVITAGION_ITEMS, SOCIAL_MEDIA_ITEMS } from '../../../../_core/constants/navigation.const';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent implements OnInit
{

  public readonly NavigationItems = NAVITAGION_ITEMS;
  public readonly SocialMediaItems = SOCIAL_MEDIA_ITEMS;

  constructor() { }

  ngOnInit()
  {
  }

}
