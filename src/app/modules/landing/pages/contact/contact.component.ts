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
    console.log(generalFormValue);
    this.GHLService.postGeneralForm(generalFormValue).subscribe({
      next: (response: boolean) =>
      {
        console.log(response);
      },
      error: () =>
      {

      }
    });
  }
}
