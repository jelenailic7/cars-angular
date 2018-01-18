import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../service/car.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  newTaskForm: FormGroup;

  public newCar:Car;

  constructor(private carService: CarService,private router:Router)
   {
     this.newCar = new Car();

     this.newTaskForm = new FormGroup(
       {
         speed: new FormControl(
           this.newCar.maxSpeed,
           this.validateMaxSpeed()
         ),
         doors: new FormControl(
           this.newCar.numberOfDoors,
           this.validateNumberOfDoors()
         )
       });
   }

 public submitCar (newCar) {
   this.carService.addCar(this.newCar);
   this.router.navigate(['/cars']);
    
  }

 public preview(){
    alert(`
    Mark: ${this.newCar.mark}, 
    Model: ${this.newCar.model},
    Year: ${this.newCar.year},
    Engine: ${this.newCar.engine},

    `);
  }


  public validateMaxSpeed() {
    return (c: FormControl) => {
        return c.value > 20 && c.value < 300 ? null : {
            validateMaxSpeed: {
                valid: false
            }
        };
    };
}
public validateNumberOfDoors() {
  return (c: FormControl) => {
       return c.value > 2 && c.value < 5? null : {
         validateNumberOfDoors: {
           valid:false
         }
       };
      };
    }


ngOnInit() {
  }

}
