import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { INSURANCE_OPTIONS } from '../../../../_core/constants/form.const';
import { INSURANCE_OPTION } from '../../../../_core/enums/service.enum';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-insurance-type-form',
  templateUrl: './insurance-type-form.component.html',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class InsuranceTypeFormComponent implements OnInit
{
  public readonly InsuranceOptions = INSURANCE_OPTIONS;
  public readonly InsuranceOption = INSURANCE_OPTION;
  private _insuranceType: FormControl = new FormControl();

  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() isFormComplete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  get isLifeInsurance(): boolean
  {
    return this._insuranceType.value == INSURANCE_OPTION.Life;
  }

  get isWealthInsurance(): boolean
  {
    return this._insuranceType.value == INSURANCE_OPTION.Wealth;
  }

  get isStateInsurance(): boolean
  {
    return this._insuranceType.value == INSURANCE_OPTION.State;
  }

  ngOnInit()
  {
  }

  public onOptionClicked(value: INSURANCE_OPTION): void
  {
    this._insuranceType.setValue(value);
    this.onValueChanged.emit(this._insuranceType.value);
    this.isFormComplete.emit(this._insuranceType.valid);
  }
}
