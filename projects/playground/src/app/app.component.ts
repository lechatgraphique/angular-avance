import {Component} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inscription = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      createBannedEmailValidator('test@test.com'),
    ], [
      uniqueEmailValidator
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    confirm: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  },{
    validators: [
      confirmPasswordValidator
    ]
  });

  get email(): FormControl {
    return this.inscription.controls.email;
  }

  get password(): FormControl {
    return this.inscription.controls.password;
  }

  get confirm(): FormControl {
    return this.inscription.controls.confirm;
  }

  onSubmit(): void {
    console.log(this.inscription.value);
  }
}

const confirmPasswordValidator: ValidatorFn = (control: AbstractControl<{password: FormControl<string>, confirm: FormControl<string>}>) => {
  const password = control.get('password');
  const confirm = control.get('confirm');

  if (password?.value !== confirm?.value) {
    confirm?.setErrors({ confirmPassword: true });
    return { confirmPassword: true };
  }
  return null;
}

const createBannedEmailValidator = (bannedEmail: string): ValidatorFn => {

  return (control: AbstractControl<string>) => {
    if (control.value === bannedEmail) {
      return {bannedEmail: true};
    }
    return null;
  };
}

const uniqueEmailValidator: AsyncValidatorFn = (control:AbstractControl<string>) => {
  return fetch(`https://jsonplaceholder.typicode.com/users?email=${control.value}`)
    .then(resp => resp.json())
    .then((users: any[]) =>{
      if (users.length > 0) {
        return { uniqueEmail: true };
      }
      return null;
  })

}
