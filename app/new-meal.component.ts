import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="new-form">
      <h4>Enter Dish:</h4>
      <input placeholder="Dish" #newDish>
      <input placeholder="Notes" #newNotes>
      <input placeholder="Calories" #newCalories>
      <button (click)="addMeal(newDish, newNotes, newCalories)" class="btn btn-info btn-sm">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(todayDish, todayNotes, todayCalories){
    var newMeal = new Meal(todayDish.value, todayNotes.value, todayCalories.value);
    this.onSubmitNewMeal.emit(newMeal);
    todayDish.value="";
    todayNotes.value="";
    todayCalories.value="";
  }
}
