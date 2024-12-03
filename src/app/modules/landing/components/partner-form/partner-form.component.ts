import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PartnerFormComponent extends BaseFormComponent implements OnInit
{
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() isFormComplete: EventEmitter<any> = new EventEmitter<any>();
  
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
