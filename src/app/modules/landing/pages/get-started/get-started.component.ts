import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { INSURANCE_OPTIONS, SERVICE_OPTIONS } from '../../../../_core/constants/form.const';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class GetStartedComponent implements OnInit
{
  public readonly ServiceOptions = SERVICE_OPTIONS;
  public readonly InsuranceOptions = INSURANCE_OPTIONS;
  
  public _form !: FormGroup;

  get personalDataFormGroup(): FormGroup
  {
    return this._form;
  }

  constructor() { }

  ngOnInit()
  {
    this.initializeFormGroup();
  }

  private initializeFormGroup(): void
  {
    this._form = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
    });
  }
}
