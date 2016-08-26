import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-form">
      <h4>Edit Dish: </h4>
      <input [(ngModel)]="meal.dish">
      <h4>Edit Notes: </h4>
      <input [(ngModel)]="meal.notes">
      <h4>Edit Calories: </h4>
      <input [(ngModel)]="meal.calories">
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
