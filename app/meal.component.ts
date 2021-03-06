import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <ul>
      <hr>
      <li class="dish">{{ meal.dish }}</li>
      <li>{{ meal.notes }}</li>
      <li>{{ meal.calories }} Calories</li>
    </ul>
  `
})
export class MealComponent {
  public meal: Meal;
}
