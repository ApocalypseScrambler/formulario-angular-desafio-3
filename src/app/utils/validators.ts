import { AbstractControl, ValidatorFn } from '@angular/forms';

export function telefonoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const telefonoRegex = /^[1-9]\d{3}-\d{6,8}$/; 

    if (!control.value) {
      return null; 
    }

    const isValid = telefonoRegex.test(control.value); 

    return isValid ? null : { telefonoInvalido: true }; 
  };
}
