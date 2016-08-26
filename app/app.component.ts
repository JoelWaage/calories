import { Component, EventEmitter } from 'angular2/core';

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

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('kiddo', clickedMeal);
    this.selectedMeal = clickedMeal;
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
