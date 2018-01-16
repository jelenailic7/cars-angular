import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { LayoutComponent } from './layout/layout.component';
import { CarService } from './service/car.service';
import { CarFormComponent } from './car-form/car-form.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LayoutComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
