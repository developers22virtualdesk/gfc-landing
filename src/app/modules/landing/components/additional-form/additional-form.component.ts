import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HEAR_ABOUT_OPTIONS } from '../../../../_core/constants/form.const';
import { BaseFormComponent } from '../../../../_shared/interfaces/base-form.interface';
import { AngularMaterialModule } from '../../../material/angular-material.module';

@Component({
  selector: 'app-additional-form',
  templateUrl: './additional-form.component.html',
  standalone: true,
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdditionalFormComponent extends BaseFormComponent implements OnInit {
  public readonly HearAboutOptions = HEAR_ABOUT_OPTIONS;

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
