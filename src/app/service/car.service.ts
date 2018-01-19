import { Injectable } from '@angular/core';
import { Car } from '../models/car';
@Injectable()
export class CarService {
  
private idCount = 1;


private cars: Car[] =[
  {
        id: 1, 
        mark: "BMW",
        model: "X5", 
        year: 2008, 
        maxSpeed: 260, 
        isAutomatic: true, 
        engine: 'Petrol ', 
        numberOfDoors:5 
  },
  {
    id: 1, 
    mark: "BMW",
    model: "X7", 
    year: 2012, 
    maxSpeed: 280, 
    isAutomatic: true, 
    engine: 'Petrol ', 
    numberOfDoors:5 
},
{
  id: 1, 
  mark: "BMW",
  model: "X6", 
  year: 2010, 
  maxSpeed: 260, 
  isAutomatic: true, 
  engine: 'Petrol ', 
  numberOfDoors:5 
}
]
  constructor() { }

  public getCars()
  {
    return this.cars;
  }
  public addCar(newCar: Car)
  {
    this.cars.push(new Car({
      id: this.idCount, 
      ...newCar    
    }));
    this.idCount = this.idCount++;  
  }

  public getById(id: number) {
    let car;
    this.cars.forEach((c)=>{
      if(c.id === id){
        car = c;
      }
    });
    return car;
  }
  public editCar(car)
  {
    this.cars.splice(this.cars.indexOf(car),1,car);
  }
}
