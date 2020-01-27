import { AbstractControl } from '@angular/forms';

export function nameValidator(control: AbstractControl): { [key: string]: any } | null { 
    const valid= /([A-Z])/g.test(control.value);
    return valid ? null : { invalidName : { valid: false, value: control.value} };
}