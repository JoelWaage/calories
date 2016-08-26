import { Component } from 'angular2/core';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Today's Food:</h1>
      <div *ngFor="#meal of meals" (click)="mealSelected(meal)">
        <h2>{{ meal.dish }}</h2>
        <h3>{{ meal.details }}</h3>
        <h4>{{ meal.calories }}</h4>
      </div>
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
    console.log(clickedMeal);
  }
}
export class Meal {
  constructor(public dish: string, public details: string, public calories: number) {

  }
}
