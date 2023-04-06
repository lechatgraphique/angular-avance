import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { BannedEmailDirective } from './validators/banned-email.directive';
import { UniqueEmailValidator } from './validators/unique-email-validator.directive';
import { ConfirmPasswordValidator } from './validators/confirm-password-validator.directive';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    BannedEmailDirective,
    UniqueEmailValidator,
    ConfirmPasswordValidator,
    ColorPickerComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
