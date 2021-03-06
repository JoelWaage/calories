import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <nav class="jumbotron">
        <h1>Today's Meals:</h1>
      </nav>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealSelected($event)">
      </meal-list>
    </div>
    `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [];
  }
  mealSelected(clickedMeal: Meal): void {
    console.log('pops', clickedMeal);
  }
}
