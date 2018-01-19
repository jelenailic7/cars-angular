import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

cars;

  constructor(private carService: CarService) { 
    this.cars = this.carService.getCars();
  }
  

  ngOnInit() {
  }

}
