import { FormControl, FormGroup } from "@angular/forms";

export abstract class BaseFormComponent
{
    public _form!: FormGroup;

    constructor() { }

    abstract createForm(): void
    abstract initializeForm(): void
    abstract onSubmit(): void
    
    public isFormDirty(): boolean
    {
        return this._form.dirty;
    }

    public isFormValid(): boolean
    {
        return this._form.valid === true;
    }

    public isFormPristine(): boolean
    {
        return this._form.pristine === true;
    }

    public getForm(): FormGroup
    {
      return this._form;
    }
  
    public getFormValue(): any
    {
      return this._form.value;
    }

    public getFormControl(controlName: string, customForm?: FormGroup): FormControl
    {
        if (customForm)
        {
            return customForm.get(controlName) as FormControl;
        }
        else
        {
            return this._form.get(controlName) as FormControl;
        }
    }

    public setFormControlValue(controlName: string, value: any): void
    {
        this._form.get(controlName)?.setValue(value);
        this._form.markAsDirty();
    }
}