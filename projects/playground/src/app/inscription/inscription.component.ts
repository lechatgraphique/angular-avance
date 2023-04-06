import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {
  @ViewChild('email') emailInput?: ElementRef<HTMLInputElement>
  data = {
    email: 'hello@lechatgraphique.fr',
    color: 'blue',
    password: 'azerty',
    confirm: 'azerty'
  }
  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
