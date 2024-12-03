import { Component, OnInit } from '@angular/core';
import { SERVICE_OPTIONS } from '../../../../_core/constants/form.const';
import { CLIENT_SERVICE_OPTION, SERVICE_OPTION } from '../../../../_core/enums/service.enum';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit
{
  public readonly ServiceOptions = SERVICE_OPTIONS;
  public readonly ServiceOption = SERVICE_OPTION;
  public readonly ClientServiceOption = CLIENT_SERVICE_OPTION;

  public firstFormValid: boolean = false;

  private _showClientForm: boolean = false;
  private _showPartnerForm: boolean = false;
  private _showGeneralForm: boolean = false;

  get showClientForm(): boolean
  {
    return this._showClientForm;
  }

  get showPartnerForm(): boolean
  {
    return this._showPartnerForm;
  }

  get showGeneralForm(): boolean
  {
    return this._showGeneralForm;
  }

  get showForm(): boolean
  {
    return this._showClientForm || this._showGeneralForm || this._showPartnerForm;
  }

  constructor() { }

  ngOnInit()
  {
  }

  public insurance_type: any;

  public onInsuranceTypeFormCompleted(value: Event): void
  {
    console.log(value);
    this.insurance_type = value;
  }

  public onGeneralFormCompleted(): void
  {

  }

  public onAdditionalFormCompleted(): void
  {
    
  }

  public onClientClicked(): void
  {
    this._showClientForm = true;
    this._showPartnerForm = false;
    this._showGeneralForm = false;
  }

  public onPartnerClicked(): void
  {
    this._showClientForm = false;
    this._showPartnerForm = true;
    this._showGeneralForm = false;
  }

  public onGeneralClicked(): void
  {
    this._showClientForm = false;
    this._showPartnerForm = false;
    this._showGeneralForm = true;
  }

  public onReturnClicked(): void
  {
    this._showClientForm = false;
    this._showPartnerForm = false;
    this._showGeneralForm = false;
  }
}
