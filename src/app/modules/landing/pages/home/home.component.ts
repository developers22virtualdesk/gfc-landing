import { Component, OnInit } from '@angular/core';
import { SERVICES_ITEMS } from '../../../../_core/constants/services.const';
import { JOURNEY_START_POINTS } from '../../../../_core/constants/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public readonly ServicesItems = SERVICES_ITEMS;
  public readonly JourneyStartPoints = JOURNEY_START_POINTS;
  constructor() { }

  ngOnInit() {
  }

}
