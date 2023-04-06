import {Component} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from "@angular/forms";

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
    security: new FormGroup({
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
    }),
    languages: new FormArray<FormGroup>([]),
  });

  ngOnInit():void {
    this.addLanguage();
    this.addLanguage();

    this.inscription.setValue({
      email: 'hello@lechatgraphique',
      security: {
        password: 'AZERTY',
        confirm: 'AZERTY'
      },
      languages: [
        {
          name: 'PHP',
          level: 'debutant'
        },
        {
          name: 'PHP',
          level: 'confirme'
        }
      ]
    });

    this.inscription.patchValue({
      email: 'hello@lechatgraphique'
    });
  }

  addLanguage(): void {
    this.languages.push(new FormGroup<{name: FormControl<string | null>, level: FormControl<string | null>}>({
      name: new FormControl(),
      level: new FormControl('debutant')
    }));
  }
  get languages(): FormArray<FormGroup> {
    return this.inscription.controls.languages;
  }
  get email(): FormControl {
    return this.inscription.controls.email;
  }

  get security(): FormGroup<{ confirm: FormControl<string | null>; password: FormControl<string | null> }> {
    return this.inscription.controls.security;
  }
  get password(): FormControl {
    return this.security.controls.password;
  }

  get confirm(): FormControl {
    return this.security.controls.confirm;
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
