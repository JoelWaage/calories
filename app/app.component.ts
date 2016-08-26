import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
    <div *ngFor="#currentMeal of mealList"
      (click)="mealClicked(currentMeal)">
      <h2>{{ currentMeal.dish }}</h2>
      <h3>{{ currentMeal.details }}</h3>
      <h4>{{ currentMeal.calories }}</h4>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('kiddo', clickedMeal);
    this.onMealSelect.emit(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Today's Food:</h1>
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
    this.meals = [
      new Meal("Dick's Burger", "Just a test", 550),
      new Meal("Pagliacci Slice", "Another test", 355)
    ];
  }
  mealSelected(clickedMeal: Meal): void {
    console.log('pops', clickedMeal);
  }
}
export class Meal {
  constructor(public dish: string, public details: string, public calories: number) {

  }
}
