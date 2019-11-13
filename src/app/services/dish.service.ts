import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { resolve } from 'q';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Promise<Dish[]>{
    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES),2000);
    });
    //simulate server latency with 2 secound
  }
  getDish(id: string): Promise<Dish> {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES.filter((dish) => (dish.id === id))[0]),2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES.filter((dish) => dish.featured)[0]),2000);
    });
  }
}
