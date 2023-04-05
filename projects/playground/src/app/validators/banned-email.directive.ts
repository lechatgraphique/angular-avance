import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[bannedEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BannedEmailDirective,
      multi: true
    }
  ]
})
export class BannedEmailDirective implements Validator {
  @Input('bannedEmail') inputEmail = '';

  validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control.value === this.inputEmail) {
      return { bannedEmail : this.inputEmail };
    }
    return null;
  }

}
