import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FORM_BOOLEAN } from '../../../../_core/constants/form.const';
import { GHL } from '../../../../_core/models/ghl.models';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';
import { AdditionalFormComponent } from '../additional-form/additional-form.component';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AdditionalFormComponent,
  ]
})
export class GeneralFormComponent extends BaseFormComponent implements OnInit
{
  private readonly FormBooleanMap = FORM_BOOLEAN;
  private _additionalFormValue!: GHL.IAdditional;
  private _givesConsent: boolean = false;

  @Output() onBackClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFormCompleted: EventEmitter<GHL.IGeneral> = new EventEmitter<GHL.IGeneral>();

  constructor()
  {
    super();
  }

  ngOnInit()
  {
    this.createForm();
    this.initializeForm();
  }

  get isGeneralFormValid(): boolean
  {
    return this._form.valid === true && this._givesConsent;
  }

  override createForm(): void
  {
    this._form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      city: new FormControl(''),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      message: new FormControl(),
    })
  }

  override initializeForm(): void
  {
  }

  override onSubmit(): void
  {
    this.onFormCompleted.emit(this.buildGeneralFormModel());
  }

  public onReturnClicked(): void
  {
    this.onBackClicked.emit();
  }

  public onAdditionalFormCompleted(additionalFormValue: GHL.IAdditional): void
  {
    this._additionalFormValue = this.buildAdditionalModel(additionalFormValue);
    this._givesConsent = this._additionalFormValue.has_consent as boolean;
  }

  private buildGeneralFormModel(): GHL.IGeneral
  {
    return {
      first_name: this._form.controls['first_name'].value,
      last_name: this._form.controls['last_name'].value,
      email: this._form.controls['email'].value,
      phone: this._form.controls['phone'].value,
      city: this._form.controls['city'].value,
      state: this._form.controls['state'].value,
      zip: this._form.controls['zip'].value,
      message: this._form.controls['message'].value,
      preferred_language: this._additionalFormValue.preferred_language,
      find_us: this._additionalFormValue.find_us,
      has_consent: this.FormBooleanMap.get(this._additionalFormValue.has_consent as boolean)!,
    }
  }

  private buildAdditionalModel(value: GHL.IAdditional): GHL.IAdditional
  {
    return {
      preferred_language: value.preferred_language,
      find_us: value.find_us,
      has_consent: value.has_consent
    }
  }
}
