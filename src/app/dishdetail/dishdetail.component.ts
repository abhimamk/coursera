import { routes } from './../app-routing/routes';
import { DishService } from './../services/dish.service';
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  constructor(private dishServices:DishService,private location:Location,private route:ActivatedRoute) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.dishServices.getDish(id).then(dish=>this.dish=dish);
  }
  goBack():void{
this.location.back();
  }

}
