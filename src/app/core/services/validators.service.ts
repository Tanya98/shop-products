import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  validName({ value }: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(value);
    if (!valid) {
      return { message: 'Only letters!' };
    }
    return null;
  }

  validEmail({ value }: FormControl): ValidationErrors | null {
    const valid = /(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(value);
    if (!valid) {
      return { message: 'Incorrect!' };
    }
    return null;
  }

  validPassword({ value }: FormControl): ValidationErrors | null {
    if (value.lenght < 6) {
      return { message: 'More than 6!' };
    }
    return null;
  }
}

