import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-form">
      <hr>
      <h4><strong>Edit</strong> {{ meal.dish }}: </h4>
      <input [(ngModel)]="meal.dish">
      <input [(ngModel)]="meal.notes">
      <input [(ngModel)]="meal.calories" type="number">
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
