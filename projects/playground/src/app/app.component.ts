import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('email') emailInput?: ElementRef<HTMLInputElement>

  onSubmit(form: NgForm): void {
    console.log(form);
  }
}
