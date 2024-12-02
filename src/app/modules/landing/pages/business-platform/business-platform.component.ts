import { Component, OnInit } from '@angular/core';
import { PARTNERTYPES_OPTIONS } from '../../../../_core/constants/business';
import { FAQS_BUSINESS_PLATFORM_ITEMS } from '../../../../_core/constants/faqs.const';

@Component({
  selector: 'app-business-platform',
  templateUrl: './business-platform.component.html',
  styleUrl: './business-platform.component.css',
})
export class BusinessPlatformComponent implements OnInit {

  public readonly PartnerTypesOptions = PARTNERTYPES_OPTIONS;
  public readonly FaqsItems = FAQS_BUSINESS_PLATFORM_ITEMS;
  ngOnInit()
  {
  }
 }
