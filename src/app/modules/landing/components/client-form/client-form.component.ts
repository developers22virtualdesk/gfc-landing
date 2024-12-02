import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FAQS_SERVICES_ITEMS } from '../../../../_core/constants/faqs.const';
import { ClientServiceOption } from '../../../../_core/enums/service.enum';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
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
  public FaqsItems = FAQS_SERVICES_ITEMS;

  @Input() insuranceType: ClientServiceOption = ClientServiceOption.Life;

  get isLifeInsurance(): boolean
  {
    return this.insuranceType == ClientServiceOption.Life;
  }

  get isWealthInsurance(): boolean
  {
    return this.insuranceType == ClientServiceOption.Wealth;
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
    if(this.isLifeInsurance)
    {
      this._form = new FormGroup({
        birthdate: new FormControl(),
        gender: new FormControl(),
        maritalStatus: new FormControl(),
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
  }

  override initializeForm(): void
  {
  } 

  override onSubmit(): void
  {

  }

}
