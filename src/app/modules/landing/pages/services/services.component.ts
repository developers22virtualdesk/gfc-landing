import { Component, OnInit } from '@angular/core';
import { FAQS_SERVICES_ITEMS } from '../../../../_core/constants/faqs.const';
import { INSURANCE_ITEMS } from '../../../../_core/constants/services.const';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public readonly InsuranceItems = INSURANCE_ITEMS;
  public readonly FaqsItems = FAQS_SERVICES_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
