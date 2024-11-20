import { Component, OnInit } from '@angular/core';
import { SERVICES_INFO } from '../../../../_core/constants/services.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public readonly ServicesItems = SERVICES_INFO;
  constructor() { }

  ngOnInit() {
  }

}
