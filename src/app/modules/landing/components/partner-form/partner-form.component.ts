import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FAQS_SERVICES_ITEMS } from '../../../../_core/constants/faqs.const';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css'],
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PartnerFormComponent extends BaseFormComponent implements OnInit
{
  public FaqsItems = FAQS_SERVICES_ITEMS;

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
    this._form = new FormGroup({
      income: new FormControl(''),
      is_clean: new FormControl(''),
      has_license: new FormControl('')
    })
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
