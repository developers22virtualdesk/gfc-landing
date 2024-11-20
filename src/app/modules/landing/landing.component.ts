import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NAVITAGION_ITEMS } from '../../_core/constants/navigation.const';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit
{
  public readonly NavigationItems = NAVITAGION_ITEMS;

  @ViewChild('sideNavigationBar') public sideNavigationBar!: MatDrawer;

  constructor() { }

  ngOnInit()
  {
  }

  public toggleSidenav(): void
  {
    this.sideNavigationBar.toggle();
  }
}
