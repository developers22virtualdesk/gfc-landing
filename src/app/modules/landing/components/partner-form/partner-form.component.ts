import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PARTNER_TIME_OPTIONS } from '../../../../_core/constants/form.const';
import { ICardOption } from '../../../../_core/models/form.model';
import { GHL } from '../../../../_core/models/ghl.models';
import { AngularMaterialModule } from '../../../material/angular-material.module';
import { AdditionalFormComponent } from '../additional-form/additional-form.component';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AdditionalFormComponent,
  ]
})
export class PartnerFormComponent implements OnInit
{
  public PartnerTimeOptions = PARTNER_TIME_OPTIONS;
  public generalForm!: FormGroup;
  public additionalForm!: FormGroup;
  private _givesConsent: boolean = false;
  private _additionalFormValue!: GHL.IAdditional;

  @Output() onBackClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFormCompleted: EventEmitter<GHL.IPartner> = new EventEmitter<GHL.IPartner>();

  get isGeneralFormValid(): boolean
  {
    return this.generalForm.valid === true;
  }

  get isAdditionalFormValid(): boolean
  {
    return this.additionalForm.valid === true && this._givesConsent;
  }

  get needsExplanation(): boolean
  {
    return this.additionalForm.controls['is_clean'].value == false;
  }

  constructor()
  {
  }

  ngOnInit()
  {
    this.createForm();
    this.initializeForm();
  }

  private createForm(): void
  {
    this.generalForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      city: new FormControl(''),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      message: new FormControl(),
    });

    this.additionalForm = new FormGroup({
      time: new FormControl('', [Validators.required]),
      income: new FormControl(0, [Validators.required]),
      is_clean: new FormControl(true),
      explanation: new FormControl(''),
      has_license: new FormControl('')
    })
  }

  private initializeForm(): void
  {
  }

  public onSubmit(): void
  {
    console.log('hace submit')
    console.log(this.buildGeneralFormModel());
  }

  public onReturnClicked(): void
  {
    this.onBackClicked.emit();
  }

  selectPartnerTime(value: ICardOption, index: number): void
  {
    this.PartnerTimeOptions.forEach(option => option.isClicked = false);
    value.isClicked = true;
    this.additionalForm.controls['time'].setValue(value.title);
  }

  public onAdditionalFormCompleted(additionalFormValue: GHL.IAdditional): void
  {
    this._additionalFormValue = this.buildAdditionalModel(additionalFormValue);
    this._givesConsent = this._additionalFormValue.has_consent;
  }

  private buildAdditionalModel(value: GHL.IAdditional): GHL.IAdditional
  {
    return {
      preferred_language: value.preferred_language,
      find_us: value.find_us,
      has_consent: value.has_consent
    }
  }

  private buildGeneralFormModel(): GHL.IPartner
  {
    return {
      first_name: this.generalForm.controls['first_name'].value,
      last_name: this.generalForm.controls['last_name'].value,
      email: this.generalForm.controls['email'].value,
      phone: this.generalForm.controls['phone'].value,
      city: this.generalForm.controls['city'].value,
      state: this.generalForm.controls['state'].value,
      zip: this.generalForm.controls['zip'].value,
      message: this.generalForm.controls['message'].value,
      income: this.additionalForm.controls['income'].value,
      time: this.additionalForm.controls['time'].value,
      is_clean: this.additionalForm.controls['is_clean'].value,
      explanation: this.additionalForm.controls['explanation'].value,
      has_license: this.additionalForm.controls['has_license'].value,
      preferred_language: this._additionalFormValue.preferred_language,
      find_us: this._additionalFormValue.find_us,
      has_consent: this._additionalFormValue.has_consent,
    }
  }

  public formatLabel(value: number): string
  {
    if (value >= 1000)
    {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
