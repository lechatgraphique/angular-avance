import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { BannedEmailDirective } from './validators/banned-email.directive';
import { UniqueEmailValidator } from './validators/unique-email-validator.directive';
import { ConfirmPasswordValidator } from './validators/confirm-password-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannedEmailDirective,
    UniqueEmailValidator,
    ConfirmPasswordValidator
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
