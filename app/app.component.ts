import { Component } from 'angular2/core';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>{{ meal.dish }} and {{ meal.details }} and {{ meal.calories }}</h1>
    </div>
    `
})
export class AppComponent {
  public meal: Meal;
  constructor(){
    this.meal = new Meal("Dick's Burger", "Just a test", 550)
  }
}
export class Meal {
  constructor(public dish: string, public details: string, public calories: number) {

  }
}
