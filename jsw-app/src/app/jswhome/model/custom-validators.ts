import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static MatchValidator(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(password);
      const targetCtrl = control.get(confirmPassword);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }



}
