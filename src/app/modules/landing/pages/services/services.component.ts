import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FAQS_SERVICES_ITEMS } from '../../../../_core/constants/faqs.const';
import { INSURANCE_ITEMS, PARTNERS } from '../../../../_core/constants/pages/services.const';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public readonly InsuranceItems = INSURANCE_ITEMS;
  public readonly FaqsItems = FAQS_SERVICES_ITEMS;
  public readonly Partners = PARTNERS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLink(link: string): void
  {
    this.router.navigate([link]);
  }
}
