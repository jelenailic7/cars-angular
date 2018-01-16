import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
@Output() onSubmit = new EventEmitter<Car>();


  private newCar: Car = new Car();
  years;
  constructor() {

    // for(let i=1990; i<=2018; i++)
    // {
    //   this.years.push(i);
    //   return;
    // }
   }

 public submitCar (car: Car) {
    this.onSubmit.emit(car);
    this.newCar = new Car();
  }

  ngOnInit() {
  }

}
