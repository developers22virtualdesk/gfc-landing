import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FAQS_SERVICES_ITEMS } from '../../../../_core/constants/faqs.const';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-additional-form',
  templateUrl: './additional-form.component.html',
  styleUrls: ['./additional-form.component.css'],
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdditionalFormComponent extends BaseFormComponent implements OnInit {

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
      preferred_language: new FormControl(''),
      find_us: new FormControl(''),
      has_consent: new FormControl(''),
    })
  }

  override initializeForm(): void
  {
  }

  override onSubmit(): void
  {

  }
}
