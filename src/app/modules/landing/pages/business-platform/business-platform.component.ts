import { Component, OnInit } from '@angular/core';
import {
  INCOMESTREAM_OPTIONS,
  MARKETING_STRATEGIES,
  IMPACT_OPTIONS,
  PARTNERTYPES_OPTIONS,
  STARTING_POINTS,
} from '../../../../_core/constants/business';
import { FAQS_BUSINESS_PLATFORM_ITEMS } from '../../../../_core/constants/faqs.const';

@Component({
  selector: 'app-business-platform',
  templateUrl: './business-platform.component.html',
  styleUrl: './business-platform.component.css',
})
export class BusinessPlatformComponent implements OnInit {
  public readonly PartnerTypesOptions = PARTNERTYPES_OPTIONS;
  public readonly IncomeStreamOptions = INCOMESTREAM_OPTIONS;
  public readonly MarketingStrategies = MARKETING_STRATEGIES;
  public readonly ImpactOptions = IMPACT_OPTIONS;
  public readonly StartingPoints = STARTING_POINTS;
  public readonly FaqsItems = FAQS_BUSINESS_PLATFORM_ITEMS;
  ngOnInit() {}
}
