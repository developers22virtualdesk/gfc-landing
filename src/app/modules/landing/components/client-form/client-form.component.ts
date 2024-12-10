import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CURRENT_SAVING_OPTIONS, FORM_BOOLEAN, GENDER_OPTIONS, INSURANCE_INTEREST_OPTIONS, INSURANCE_MATTERS_OPTIONS, INSURANCE_TYPE_MAP, MARITAL_OPTIONS } from '../../../../_core/constants/form.const';
import { INSURANCE_OPTION } from '../../../../_core/enums/service.enum';
import { ICardOption } from '../../../../_core/models/form.model';
import { IOptionList } from '../../../../_core/models/generic.model';
import { GHL } from '../../../../_core/models/ghl.models';
import { ageValidator } from '../../../../_shared/validators/min-age.validator';
import { AngularMaterialModule } from '../../../material/angular-material.module';
import { AdditionalFormComponent } from '../additional-form/additional-form.component';
import { InsuranceTypeFormComponent } from '../insurance-type-form/insurance-type-form.component';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    InsuranceTypeFormComponent,
    AdditionalFormComponent,
  ]
})
export class ClientFormComponent implements OnInit
{
  private readonly FormBooleanMap = FORM_BOOLEAN;
  private readonly InsuranceTypeMap = INSURANCE_TYPE_MAP;
  private _additionalFormValue!: GHL.IAdditional;
  private _givesConsent: boolean = false;
  public readonly GenderOptions = GENDER_OPTIONS;
  public readonly MaritalOptions = MARITAL_OPTIONS;
  public readonly CurrentSavingsOptions = CURRENT_SAVING_OPTIONS;
  public InsuranceInterestOptions = INSURANCE_INTEREST_OPTIONS;
  public InsuranceMattersOptions = INSURANCE_MATTERS_OPTIONS;
  public generalForm!: FormGroup;
  public additionalForm!: FormGroup;
  public insuranceForm!: FormGroup;

  @Output() onBackClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFormCompleted: EventEmitter<GHL.IClient> = new EventEmitter<GHL.IClient>();

  @ViewChild('stepper') private myStepper!: MatStepper;

  get isLifeInsurance(): boolean
  {
    return this.insuranceType == INSURANCE_OPTION.Life;
  }

  get isWealthInsurance(): boolean
  {
    return this.insuranceType == INSURANCE_OPTION.Wealth || this.insuranceType == INSURANCE_OPTION.Estate;
  }

  get insuranceType(): INSURANCE_OPTION
  {
    return this.insuranceForm.controls['insurance_type'].value;
  }

  get isGeneralFormValid(): boolean
  {
    return this.generalForm.valid === true;
  }

  get isAdditionalFormValid(): boolean
  {
    return this.additionalForm.valid === true && this._givesConsent;
  }

  get isInsuranceFormValid(): boolean
  {
    return this.insuranceForm.valid === true;
  }

  get mattersArray(): FormArray
  {
    return this.additionalForm.get('matters') as FormArray;
  }

  get currentSavingArray(): FormArray
  {
    return this.additionalForm.get('current_saving') as FormArray;
  }

  get insuranceInterestArray(): FormArray
  {
    return this.additionalForm.get('insurance_interests') as FormArray;
  }

  constructor()
  {
  }

  ngOnInit()
  {
    this.createForm();
  }

  private createForm(): void
  {
    this.insuranceForm = new FormGroup({
      insurance_type: new FormControl('', [Validators.required])
    });

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

    if (this.isLifeInsurance)
    {
      this.createLifeForm();
    }

    if (this.isWealthInsurance)
    {
      this.createWealthForm();
    }
  }

  private createLifeForm(): void
  {
    this.additionalForm = new FormGroup({
      birthdate: new FormControl('', [Validators.required, ageValidator(18)]),
      gender: new FormControl(''),
      marital_status: new FormControl('', [Validators.required]),
      children_under_18: new FormControl(),
      annual_income: new FormControl(0, [Validators.required]),
      saving_per_month: new FormControl(0, [Validators.required]),
      save_more: new FormControl(0, [Validators.required]),
      insurance_interests: new FormArray([]),
    });
  }

  private createWealthForm(): void
  {
    this.additionalForm = new FormGroup({
      saving_per_month: new FormControl(0, [Validators.required]),
      save_more: new FormControl(0, [Validators.required]),
      current_saving: new FormArray([], [Validators.required]),
      matters: new FormArray([]),
    })
  }

  public onSubmit(): void
  {
    this.onFormCompleted.emit(this.buildGeneralFormModel());
  }

  public onReturnClicked(): void
  {
    this.onBackClicked.emit();
  }

  toggleCurrentSaving(option: IOptionList): void
  {
    const index = this.currentSavingArray.controls.findIndex(control => control.value === option.title);
    if (index !== -1)
    {
      this.removeCurrentSaving(index);
    } else
    {
      this.addCurrentSaving(option.title);
    }
  }

  private addCurrentSaving(title: string): void
  {
    this.currentSavingArray.push(new FormControl(title));
  }

  private removeCurrentSaving(index: number): void
  {
    this.currentSavingArray.removeAt(index);
  }


  public addInsuranceInterest(value: ICardOption, index: number): void
  {
    if (value.isClicked)
    {
      this.InsuranceInterestOptions[index].isClicked = false;
      this.removeInsuranceInterest(index);
    }
    else
    {
      this.InsuranceInterestOptions[index].isClicked = true;
      const newMatter = new FormControl(value.title);
      this.insuranceInterestArray.push(newMatter);
    }

    if (value.title == 'Get Instant Approval' && value.isClicked)
    {
      window.open('https://agents.ethoslife.com/invite/f27cc', '_blank');
    }
  }

  private removeInsuranceInterest(index: number): void
  {
    this.insuranceInterestArray.removeAt(index);
  }

  public addMatter(value: ICardOption, index: number): void
  {
    if (value.isClicked)
    {
      this.InsuranceMattersOptions[index].isClicked = false;
      this.removeMatter(index);
    }
    else
    {
      this.InsuranceMattersOptions[index].isClicked = true;
      const newMatter = new FormControl(value.title);
      this.mattersArray.push(newMatter);
    }
  }

  private removeMatter(index: number): void
  {
    this.mattersArray.removeAt(index);
  }

  public onInsuranceTypeFormCompleted(value: Event): void
  {
    this.insuranceForm.controls['insurance_type'].setValue(value);
    this.myStepper.next();
    if (this.isLifeInsurance)
    {
      this.createLifeForm();
    }

    if (this.isWealthInsurance)
    {
      this.createWealthForm();
    }
  }

  public onAdditionalFormCompleted(additionalFormValue: GHL.IAdditional): void
  {
    this._additionalFormValue = this.buildAdditionalModel(additionalFormValue);
    this._givesConsent = this._additionalFormValue.has_consent as boolean;
  }

  private buildAdditionalModel(value: GHL.IAdditional): GHL.IAdditional
  {
    return {
      preferred_language: value.preferred_language,
      find_us: value.find_us,
      has_consent: value.has_consent
    }
  }

  private buildGeneralFormModel(): GHL.IClient
  {
    return {
      insurance_type: this.InsuranceTypeMap.get(this.insuranceForm.controls['insurance_type'].value)!,
      first_name: this.generalForm.controls['first_name'].value,
      last_name: this.generalForm.controls['last_name'].value,
      email: this.generalForm.controls['email'].value,
      phone: this.generalForm.controls['phone'].value,
      city: this.generalForm.controls['city'].value,
      state: this.generalForm.controls['state'].value,
      zip: this.generalForm.controls['zip'].value,
      message: this.generalForm.controls['message'].value,
      insurance_interests: this.isLifeInsurance ? this.additionalForm.controls['insurance_interests'].value : null,
      birthdate: this.isLifeInsurance ? this.additionalForm.controls['birthdate'].value : null,
      gender: this.isLifeInsurance ? this.additionalForm.controls['gender'].value : null,
      marital_status: this.isLifeInsurance ? this.additionalForm.controls['marital_status'].value : null,
      children_under_18: this.isLifeInsurance ? this.additionalForm.controls['children_under_18'].value : null,
      annual_income: this.isLifeInsurance ? this.additionalForm.controls['annual_income'].value : null,
      saving_per_month: this.additionalForm.controls['saving_per_month'].value,
      save_more: this.additionalForm.controls['save_more'].value,
      current_saving: this.isWealthInsurance ? this.additionalForm.controls['current_saving'].value : null,
      matters: this.isWealthInsurance ? this.additionalForm.controls['matters'].value : null,
      preferred_language: this._additionalFormValue.preferred_language,
      find_us: this._additionalFormValue.find_us,
      has_consent: this.FormBooleanMap.get(this._additionalFormValue.has_consent as boolean)!,
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
