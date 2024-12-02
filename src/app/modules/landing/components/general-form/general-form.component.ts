import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FAQS_SERVICES_ITEMS } from '../../../../_core/constants/faqs.const';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css'],
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class GeneralFormComponent extends BaseFormComponent implements OnInit {

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
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      message: new FormControl(),
      find_us: new FormControl(''),
    })
  }

  override initializeForm(): void
  {
  }

  override onSubmit(): void
  {
 
  }

}
