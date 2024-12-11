import { Component, OnInit } from '@angular/core';
import { CONTACT_INFO } from '../../../../_core/constants/pages/contact.const';
import { GHL } from '../../../../_core/models/ghl.models';
import { GHLService } from '../../../../_core/services/ghl.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit
{
  public readonly ContactInfo = CONTACT_INFO;

  constructor(private GHLService: GHLService) { }

  ngOnInit()
  {
  }

  public onGeneralFormCompleted(generalFormValue: GHL.IGeneral): void
  {
    this.GHLService.postGeneralForm(generalFormValue).subscribe({
      next: (response: boolean) =>
      {
      },
      error: () =>
      {

      }
    });
  }

  public redirectToCalendly(): void
  {
    window.open('https://calendly.com/gficatalyst/60min?month=2024-10&date=2024-10-13', '_blank');
  }
}
