import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  INCOMESTREAM_OPTIONS,
  MARKETING_STRATEGIES,
  IMPACT_OPTIONS,
  PARTNERTYPES_OPTIONS,
  STARTING_POINTS,
} from '../../../../_core/constants/business';

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

  ngOnInit() {}
}
