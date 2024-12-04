import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ageValidator(minAge: number = 18): ValidatorFn
{
  return (control: AbstractControl): ValidationErrors | null =>
  {
    if (!control.value)
    {
      return null; // No value means no error
    }

    const today = new Date();
    const birthDate = new Date(control.value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const isOldEnough =
      age > minAge ||
      (age === minAge &&
        (today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate())));

    return isOldEnough ? null : { ageValidator: { requiredAge: minAge } };
  };
}
