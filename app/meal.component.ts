import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h2>{{ meal.dish }}</h2>
    <h3>{{ meal.details }}</h3>
    <h4>{{ meal.calories }}</h4>
  `
})
export class MealComponent {
  public meal: Meal;
}
