import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = new FormControl();

  ngOnInit(): void {
    this.email.addValidators(requiredValidator);
    this.email.setValue('hello@lechatgraphique.fr');
    console.log(this.email.valid);
  }
}

const requiredValidator: ValidatorFn = (control: AbstractControl) => {
  if (control.value === '') {
    return { required: true};
  }
  return null;
}
