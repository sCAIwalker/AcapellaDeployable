import {FormControl} from '@angular/forms';

export class ContactValidators {
  /**
   * sample from http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
   * KEVIN IS CHANGING THE SAMPLE
   */

  static cannotContainSpace (c: FormControl) {
      if(c.value.indexOf(' ') >= 0) {
        return {cannotContainSpace: true};
      }

      return null;
  }

  static validateName(c: FormControl) {
    let NAME_REGEXP = /^[a-zA-Z\s]*$/;

    return NAME_REGEXP.test(c.value) ? null : {
      validateName: true
    };
  }

  static validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: true
    };
  }

  static validateHuman = (firstNum: number, secondNum: number) => {
  return (c :FormControl) => {
    var sum =Number(c.value);
    if (sum != (firstNum + secondNum)) {
      return { validateHuman: true };
    }
    return null;
  };
};

}
