import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../service/car.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {


  public newCar:Car;

  constructor(private carService: CarService,private router:Router)
   {
     this.newCar = new Car();
   }

 public submitCar (newCar) {
   this.carService.addCar(this.newCar);
   this.router.navigate(['/cars']);
    
  }

  ngOnInit() {
  }

}
