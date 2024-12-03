import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GENDER_OPTIONS, MARITAL_OPTIONS } from '../../../../_core/constants/form.const';
import { INSURANCE_OPTION } from '../../../../_core/enums/service.enum';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class ClientFormComponent extends BaseFormComponent implements OnInit
{
  public readonly GenderOptions= GENDER_OPTIONS;
  public readonly MaritalOptions = MARITAL_OPTIONS;
  
  @Input() insuranceType: INSURANCE_OPTION = INSURANCE_OPTION.Life;

  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() isFormComplete: EventEmitter<any> = new EventEmitter<any>();
  
  get isLifeInsurance(): boolean
  {
    return this.insuranceType == INSURANCE_OPTION.Life;
  }

  get isWealthInsurance(): boolean
  {
    return this.insuranceType == INSURANCE_OPTION.Wealth || this.insuranceType == INSURANCE_OPTION.Rollovers;
  }

  constructor()
  {
    super();
  }

  ngOnInit()
  {
    this.createForm();
    this.initializeForm();
  }

  override createForm(): void
  {
    console.log("🚀 ~ this.isLifeInsurance:", this.isLifeInsurance)
    if(this.isLifeInsurance)
    {
      this._form = new FormGroup({
        birthdate: new FormControl(),
        gender: new FormControl(),
        marital_status: new FormControl(),
        children_under_18: new FormControl(),
        annual_income: new FormControl(),
        saving_per_month: new FormControl(),
        save_more: new FormControl(),
        residence: new FormControl(),
      })
    }

    if(this.isWealthInsurance)
    {
      this._form = new FormGroup({
        saving_per_month: new FormControl(),
        save_more: new FormControl(),
        current_saving: new FormControl(),
        matters: new FormControl(),
      })
    }
    console.log("🚀 ~ this.isWealthInsurance:", this.isWealthInsurance)
  }

  override initializeForm(): void
  {
  } 

  override onSubmit(): void
  {

  }

  public formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

}
