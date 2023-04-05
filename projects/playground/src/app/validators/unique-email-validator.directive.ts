import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable, retry} from "rxjs";

@Directive({
  selector: '[ngModel][uniqueEmail], [formControl][uniqueEmail], [formControlName][uniqueEmail]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqueEmailValidator,
      multi:true
    }
  ]
})
export class UniqueEmailValidator implements AsyncValidator{
  @Input('uniqueEmail') inputEmail?: string;
  validate(control: AbstractControl<string>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return fetch(`https://jsonplaceholder.typicode.com/users?email=${control.value}`)
      .then(res => res.json())
      .then((userArr: any[]) => {
        if (userArr.length > 0) {
          return { uniqueEmail: this.inputEmail }
        }
        return null;
      })
  }
}
