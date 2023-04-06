import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    createBannedEmailValidator('test@test.com')
  ]);
}
const createBannedEmailValidator= (bannedEmail: string): ValidatorFn => {
  return (control: AbstractControl<string>) => {
    if (control.value === bannedEmail) {
      return {bannedEmail: true};
    }
    return null;
  };
}


