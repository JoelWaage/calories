import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <ul>
      <li class="dish">{{ meal.dish }}</li>
      <li>{{ meal.notes }}</li>
      <li>{{ meal.calories }}</li>
    </ul>
  `
})
export class MealComponent {
  public meal: Meal;
}
