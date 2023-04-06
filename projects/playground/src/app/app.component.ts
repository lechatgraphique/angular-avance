import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
