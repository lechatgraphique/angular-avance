import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

interface IIngredient {
  name: FormControl;
  quantity: FormControl;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  formRecipe = new FormGroup({
    title: new FormControl(),
    ingredients: new FormArray<FormGroup<IIngredient>>([])
  });

  get title(): FormControl {
    return this.formRecipe.controls.title;
  }

  get ingredients(): FormArray<FormGroup<IIngredient>> {
    return this.formRecipe.controls.ingredients;
  }

  addIngredient(): void {
    this.ingredients.push(new FormGroup<IIngredient>(
      {name: new FormControl(), quantity: new FormControl()}
    ))
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.formRecipe.value);
  }
}
