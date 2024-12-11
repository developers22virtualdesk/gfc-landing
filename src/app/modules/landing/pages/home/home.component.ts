import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JOURNEY_START_POINTS, SERVICES_ITEMS } from '../../../../_core/constants/pages/home.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public readonly ServicesItems = SERVICES_ITEMS;
  public readonly JourneyStartPoints = JOURNEY_START_POINTS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLink(link: string): void
  {
    this.router.navigate([link]);
  }
}
