import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BannedEmailDirective } from './validators/banned-email.directive';
import { UniqueEmailValidator } from './validators/unique-email-validator.directive';
import { ConfirmPasswordValidator } from './validators/confirm-password-validator.directive';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveInscriptionComponent } from './reactive-inscription/reactive-inscription.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { MoviesComponent } from './components/movies/movies.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MoviesKeyInterceptor} from "./interceptors/movies-key.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    BannedEmailDirective,
    UniqueEmailValidator,
    ConfirmPasswordValidator,
    ColorPickerComponent,
    InscriptionComponent,
    ReactiveInscriptionComponent,
    RecipeComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MoviesKeyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
