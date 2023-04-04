import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('email') emailInput?: ElementRef<HTMLInputElement>

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    console.log(this.emailInput?.nativeElement.value);
  }
}
